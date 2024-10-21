import axios from 'axios';
import dotenv from 'dotenv';
import client from "../redis-client.js";

dotenv.config();

const API_KEY = process.env.NEWS_API_KEY;

/*
    Helper function para filtrar los articulos que tengan el
    valor de "[Removed]" en alguno de sus atributos.
*/
const filterRemovedArticles = (articles) => {
    return articles.filter(article =>
        !Object.values(article).some(value =>
            typeof value === 'string' && value.includes('[Removed]')
        )
    );
};

// Controlador para Top Headlines
export const getTopHeadlines = async (req, res) => {
    const queries = req.query;

    const pageNumber = parseInt(queries.page) || 1;
    const pageSizeMax = Math.min(parseInt(queries.pageSize) || 30, 100);

    const cacheKey = `top-headlines:${JSON.stringify(queries)}`;
    const cachedData = await client.get(cacheKey);

    if (cachedData && !queries.q) {
        const parsedData = JSON.parse(cachedData);
        return res.json(parsedData);
    }

    try {
        const params = {
            apiKey: API_KEY,
            page: 1, // Always fetch from the first page
            pageSize: 100, // Fetch maximum allowed articles
            q: queries.q || 'world'
        };

        if (queries.source) params.sources = queries.source;
        else {
            if (queries.country) params.country = queries.country;
            if (queries.category) params.category = queries.category;
        }

        const response = await axios.get("https://newsapi.org/v2/top-headlines", { params });

        const { articles, totalResults } = response.data;

        const filteredArticles = filterRemovedArticles(articles);

        const totalFilteredResults = filteredArticles.length;

        // Implement pagination on filtered articles
        const startIndex = (pageNumber - 1) * pageSizeMax;
        const endIndex = startIndex + pageSizeMax;
        const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

        const totalPages = Math.ceil(totalFilteredResults / pageSizeMax);

        const responseObj = {
            status: 'ok',
            totalResults: totalFilteredResults,
            articles: paginatedArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
            currentPage: pageNumber,
            totalPages,
            totalLeft: totalResults - totalFilteredResults,
        };
        
        await client.setEx(cacheKey, 30, JSON.stringify(responseObj));

        res.status(200).json(responseObj);
    } catch (error) {
        const status = error.response?.status || 500;
        res.status(status).json({
            message: `Error fetching headlines: ${error.message}`,
            error: error.response?.data || "Unknown error",
        });
    }
};

// Controlador para Everything
export const getEverything = async (req, res) => {
    const queries = req.query;

    const pageNumber = parseInt(queries.page) || 1;
    const pageSizeMax = Math.min(parseInt(queries.pageSize) || 15, 100);

    const cacheKey = `everything:${JSON.stringify(queries)}`;
    const cachedData = await client.get(cacheKey);

    if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        return res.json(parsedData);
    }

    try {
        const params = {
            ...queries,
            apiKey: API_KEY,
            page: 1, // Always fetch from the first page
            pageSize: 100, // Fetch maximum allowed articles
        };

        const response = await axios.get('https://newsapi.org/v2/everything', { params });

        const { articles, totalResults } = response.data;

        const filteredArticles = filterRemovedArticles(articles);

        const totalFilteredResults = filteredArticles.length;

        // Implement pagination on filtered articles
        const startIndex = (pageNumber - 1) * pageSizeMax;
        const endIndex = startIndex + pageSizeMax;
        const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

        const totalPages = Math.ceil(totalFilteredResults / pageSizeMax);

        const responseObj = {
            status: 'ok',
            totalResults: totalFilteredResults,
            articles: paginatedArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
            currentPage: pageNumber,
            totalPages,
        };

        // Cache the filtered and paginated articles
        await client.setEx(cacheKey, 30, JSON.stringify(responseObj)); // Cache for 1 hour

        res.status(200).json(responseObj);
    } catch (error) {
        const status = error.response?.status || 500;
        res.status(status).json({
            message: `Error fetching all news: ${error.message}`,
            error: error.response?.data || "Unknown error",
        });
    }
};

// Controlador para obtener noticias por source
export const getSources = async (req, res) => {
    const { category, language, country } = req.query;

    const cacheKey = `sources:${category}:${language}:${country}`; // Unique key for sources
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
        return res.json(JSON.parse(cachedData));
    }

    try {
        const response = await axios.get('https://newsapi.org/v2/sources', {
            params: {
                category,
                language,
                country,
                apiKey: API_KEY,
            }
        });

        // Filter out sources with "[Removed]" in any attribute
        const filteredSources = filterRemovedArticles(response.data.sources);

        res.json(filteredSources);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sources', error: error.message });
    }
};

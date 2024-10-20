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
    // Try to get cached data
    const cachedData = await client.get('top-headlines');
    const {
        country = '',
        category = '',
        source = '',
        q = '',
        pageSize = 15,
        page = 1,
    } = req.query;

    if (cachedData && !q) {
        const parsedData = JSON.parse(cachedData);
        return res.json({
            status: 'ok',
            totalResults: parsedData.totalResults,
            articles: parsedData.articles,
            currentPage: parsedData.currentPage,
            totalPages: parsedData.totalPages,
        });
    }

    try {
        const fetchPromises = [];
        const params = { apiKey: API_KEY, pageSize: 100, page, q: q || 'world' };
        if (source) params.sources = source;
        else {
            if (country) params.country = country;
            if (category) params.category = category;
        }

        fetchPromises.push(
            axios.get('https://newsapi.org/v2/top-headlines', {
                params: params,
            })
        );
        
        const responses = await Promise.all(fetchPromises);

        let allArticles = [];
        responses.forEach((response) => {
            if (response.data.articles) {
                allArticles.push(...response.data.articles);
            }
        });

        // Filter out "[Removed]" articles
        const filteredArticles = filterRemovedArticles(allArticles);
        
        const totalResults = filteredArticles.length;
        const totalPages = Math.ceil(totalResults / pageSize);
        
        const shuffledArticles = filteredArticles.sort(() => 0.5 - Math.random());
        const paginatedArticles = shuffledArticles.slice(
            (page - 1) * pageSize,
            page * pageSize
        );

        // Cache the filtered articles
        await client.setEx('top-headlines', 3, JSON.stringify({
            status: 'ok',
            totalResults,
            articles: paginatedArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
            currentPage: parseInt(page, 10),
            totalPages,
        })); // Cache for 3 minutes in seconds

        res.json({
            status: 'ok',
            totalResults,
            articles: paginatedArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
            currentPage: parseInt(page, 10),
            totalPages,
        });
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

    // Try to get cached data
    const cacheKey = `everything:${q}:${country}:${source}:${page}`; // Unique key for search query
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
        return res.json(JSON.parse(cachedData));
    }

    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                ...queries,
                pageSize: queries.pageSize || 20,
                apiKey: API_KEY,
            },
        });

        // Filter out "[Removed]" articles
        const filteredArticles = filterRemovedArticles(response.data.articles);

        // Cache the filtered articles
        await client.setEx(cacheKey, 3, JSON.stringify(filteredArticles)); // Cache for 3 minutes in seconds    

        const totalResults = filteredArticles.length;
        
        const paginatedArticles = filteredArticles.slice(
            (page - 1) * pageSize,
            page * pageSize
        );
        
        const totalPages = Math.ceil(totalResults / pageSize);

        res.json({
            status: 'ok',
            totalResults,
            articles: paginatedArticles,
            currentPage: parseInt(page, 10),
            totalPages,
        });
    } catch (error) {
        const status = error.response?.status || 500;
        res.status(status).json({
            message: `Error fetching headlines: ${error.message}`,
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

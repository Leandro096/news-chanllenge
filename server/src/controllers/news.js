import axios from 'axios';
import dotenv from 'dotenv';

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
    const { country = 'us', categories = '', pageSize = 15, page = 1 } = req.query;

    let categoryArray;
    try {
        categoryArray = Array.isArray(categories)
            ? categories
            : categories.split(',').filter(Boolean);
    } catch (error) {
        return res.status(400).json({ message: 'Invalid categories format' });
    }

    try {
        const fetchPromises = categoryArray.length === 0
            ? [
                axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: country,
                        category: 'general',
                        pageSize: 100,
                        apiKey: API_KEY,
                    },
                }),
            ]
            : categoryArray.map((category) =>
                axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        country: country,
                        category,
                        pageSize: 100,
                        apiKey: API_KEY,
                    },
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

        res.json({
            status: 'ok',
            totalResults,
            articles: paginatedArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)),
            currentPage: parseInt(page, 10),
            totalPages,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching headlines',
            error: error.message,
        });
    }
};

// Controlador para Everything
export const getEverything = async (req, res) => {
    const { q, from, to, language, sortBy, pageSize = 20, page = 1 } = req.query;
    const query = q || 'world';

    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                from,
                to,
                language,
                sortBy,
                pageSize: 100, // Fetch enough data
                apiKey: API_KEY,
            }
        });

        // Filter out "[Removed]" articles
        const filteredArticles = filterRemovedArticles(response.data.articles);

        const totalResults = filteredArticles.length;
        const totalPages = Math.ceil(totalResults / pageSize);

        const paginatedArticles = filteredArticles.slice(
            (page - 1) * pageSize,
            page * pageSize
        );

        res.json({
            status: response.data.status,
            totalResults,
            articles: paginatedArticles,
            currentPage: parseInt(page, 10),
            totalPages,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error searching for news', error: error.message });
    }
};

// Controlador para obtener solo una noticia
export const getSpecificNews = async (req, res) => {
    const { url } = req.params;

    try {
        const article = await findArticleByUrl(url); // Implement this function
        if (!article || Object.values(article).some(value => 
            typeof value === 'string' && value.includes('[Removed]')
        )) {
            return res.status(404).json({ message: 'Article not found or removed' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching specific news', error: error.message });
    }
};

// Controlador para obtener noticias por source
export const getSources = async (req, res) => {
    const { category, language, country } = req.query;

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

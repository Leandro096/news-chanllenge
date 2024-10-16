import api from "../services/api/api";

export const getNews = async (country, categories, language, source, page) => {
    try {
        const response = await api.get('/api/news/top-headlines', {
            params: { 
                country,
                language,
                source,
                categories,  // This should be a comma-separated string
                page 
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error while fetching news: ${error.message}`);
    }
};

export const getEverything = async (query, from, to, language, category, source, sortBy, page) => {
    try {
        const response = await api.get('/api/news/everything', {
            params: {
                q: query,
                from,
                to,
                language,
                category,
                source,
                sortBy,
                page,
            },
        });
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching everything:', error);
        throw error; // Re-throw the error for handling elsewhere
    }
};

export const getSpecificNews = async (url) => {
    try {
        const response = await api.get(`/api/news/news/${encodeURIComponent(url)}`); // Use encodeURIComponent to handle special characters in the URL
        return response.data; // Return the article data
    } catch (error) {
        console.error('Error fetching specific news:', error);
        throw error; // Re-throw the error for handling elsewhere
    }
};

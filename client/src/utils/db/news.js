import api from "../services/api/api";

export const getNews = async (params = {}) => {
    try {
        const response = await api.get('/api/news/top-headlines', {
            params: params
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error while fetching news: ${error.message}`);
    }
};

export const getEverything = async (queries) => {
    try {
        const response = await api.get('/api/news/everything', {
            params: {
                ...queries
            },
        });
        return response.data; // Return the data from the response
    } catch (error) {
        throw new Error(`Error while fetching news: ${error.message}`);
    }
};

export const getSpecificNews = async (url) => {
    try {
        const response = await api.get(`/api/news/news/${encodeURIComponent(url)}`); // Use encodeURIComponent to handle special characters in the URL
        return response.data; // Return the article data
    } catch (error) {
        throw new Error(`Error while fetching news: ${error.message}`);
    }
};

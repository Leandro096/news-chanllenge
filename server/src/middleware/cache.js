import client from "../redis-client.js";

export const cache = async (req, res, next) => {
    const cachedData = await client.get('news');

    if (cachedData) {
        res.send(JSON.parse(cachedData));
    }

    next();
};

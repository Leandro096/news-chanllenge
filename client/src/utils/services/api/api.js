import axios from "axios";
import { getToken } from "./secureToken";

const serverURL = import.meta.env.VITE_SERVER_URL;

const api = axios.create({
    baseURL: serverURL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    async (config) => {
        const token = await getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;

import api from '../services/api/api.js';
import { getToken } from '../services/api/secureToken.js';

export const getUsers = async () => {
    try {
        const response = await api.get("/api/users");
        return response.data;
    } catch (error) {
        throw new Error("Error while fetching users", error);
    }
};

export const getUser = async (_id) => {
    try {
        const response = await api.get(`/users/UserById/${_id}`);
        return response.data;
    } catch (error) {
        throw new Error("Error while fetching user", error);
    }
};

export const getCurrentUser = async () => {
    const token = getToken();
    if (!token) return null;
    
    try {
        const response = await api.get("/api/users/me");
        return response.data;
    } catch (error) {
        throw new Error("Error while fetching current user", error);
    }
};

export const updateUserPreference = async (preference) => {
    try {
        const response = await api.patch("/api/users/me/preferences", preference);
        return response.data;
    } catch (error) {
        throw new Error("Error while updating user preference: ", error, error);
    }
};

export const createUser = async (user) => {
    try {
        const response = await api.post("/api/users", user);
        return response.data;
    } catch (error) {
        throw new Error("Error while creating user", error);
    }
};

export const updateUser = async (_id, user) => {
    try {
        const response = await api.put(`/users/${_id}`, user);
        return response.data;
    } catch (error) {
        throw new Error("Error while updating user", error);
    }
};

export const deleteUser = async (_id) => {
    try {
        const response = await api.delete(`/users/${_id}`);
        return response.data;
    } catch (error) {
        throw new Error("Error while deleting user", error);
    }
};

export const login = async (user) => {
    try {
        const response = await api.post("/api/users/login", user);
        return response.data;
    } catch (error) {
        throw new Error("Error while logging in", error);
    }
};

export const logout = async () => {
    try {
        const response = await api.post("/api/users/logout");
        return response.data;
    } catch (error) {
        throw new Error("Error while logging out", error);
    }
};

export const logoutAll = async () => {
    try {
        const response = await api.post("/api/users/logoutAll");
        return response.data;
    } catch (error) {
        throw new Error("Error while logging out all", error);
    }
};

import express from "express";
import auth from "../middleware/auth.js";
import {
    createUser,
    login,
    readUser,
    updateUser,
    updateUserPreferences,
    deleteUser,
    logout,
    logoutAll,
} from "../controllers/user.js";
import { createUserPreferences, deleteUserPreference, readUserPreference } from "../controllers/preference.js";

const router = express.Router();

// Create user route
router.post("/", createUser);

// Login user route
router.post("/login", login);

// Read user route
router.get("/me", auth, readUser);

// Update user route
router.patch("/:id", auth, updateUser);

// Delete user route
router.delete("/:id", auth, deleteUser);

// Logout user route
router.post("/logout", auth, logout);

// Logout all user route
router.post("/logoutAll", auth, logoutAll);

// create user preferences route and save it in its own collection
router.post("/preferences",/*  auth, */ createUserPreferences);

// read user preferences route  and save it in its own collection
router.get("/preferences", auth, readUserPreference);

// update user preferences route
router.patch("/me/preferences", auth, updateUserPreferences);

// delete user preferences route
router.delete("/preferences/:id", auth, deleteUserPreference);

export default router;

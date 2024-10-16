import express from "express";
import auth from "../middleware/auth.js";
import {
    createUser,
    login,
    readUser,
    readUsers,
    updateUser,
    deleteUser,
    logout,
    logoutAll,
    addUserPreferences,
    deleteUserPreferences,
    readUserPreferences,
} from "../controllers/user.js";

const router = express.Router();

// Create user route
router.post("/", createUser);

// Login user route
router.post("/login", login);

// Read users route
router.get("", auth, readUsers);

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

// Add user preferences route
router.post("/preferences", auth, addUserPreferences);

// Delete user preferences route
router.delete("/preferences", auth, deleteUserPreferences);

// Read user preferences route
router.get("/preferences", auth, readUserPreferences);

export default router;

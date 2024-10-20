import express from "express";
import auth from "../middleware/auth.js";
import {
    createUser, login, readUser,
    updateUser, updateUserPreferences,
    deleteUser, logout, logoutAll,
} from "../controllers/user.js";

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

// update user preferences route
router.patch("/me/preferences", auth, updateUserPreferences);

export default router;

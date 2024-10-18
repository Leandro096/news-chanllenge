import express from 'express';
import auth from '../middleware/auth.js';
import {
    createUserPreferences,
    readPreferences,
    readUserPreference,
    updateUserPreference,
    deleteUserPreference,
} from '../controllers/preference.js';

const router = express.Router();

// Create preference route
router.post('', auth, createUserPreferences);

// Read preferences route
router.get('', auth, readPreferences);

// Read preference route
router.get('/:id', auth, readUserPreference);

// Update preference route
router.patch('/:id', auth, updateUserPreference);

// Delete preference route
router.delete('/:id', auth, deleteUserPreference);

export default router;

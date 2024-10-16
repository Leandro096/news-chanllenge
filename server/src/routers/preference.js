import express from 'express';
import auth from '../middleware/auth.js';
import {
    createPreference,
    readPreferences,
    readPreference,
    updatePreference,
    deletePreference,
} from '../controllers/preference.js';

const router = express.Router();

// Create preference route
router.post('', auth, createPreference);

// Read preferences route
router.get('', auth, readPreferences);

// Read preference route
router.get('/:id', auth, readPreference);

// Update preference route
router.patch('/:id', auth, updatePreference);

// Delete preference route
router.delete('/:id', auth, deletePreference);

export default router;

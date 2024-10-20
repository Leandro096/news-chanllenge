import express from 'express';
import {
    getTopHeadlines,
    getEverything,
    getSources
} from '../controllers/news.js';
import { cache } from '../middleware/cache.js';

const router = express.Router();

router.get('/top-headlines', cache, getTopHeadlines);

router.get('/everything', cache, getEverything);

router.get('/sources', cache, getSources);

export default router;

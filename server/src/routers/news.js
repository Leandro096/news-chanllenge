import express from 'express';
import {
    getTopHeadlines,
    getEverything,
    getSpecificNews,
    getSources
} from '../controllers/news.js';
import { cache } from '../middleware/cache.js';

const router = express.Router();

router.get('/top-headlines', cache, getTopHeadlines);

router.get('/everything', cache, getEverything);

router.get('/news/:url', cache, getSpecificNews);

router.get('/sources', cache, getSources);

export default router;

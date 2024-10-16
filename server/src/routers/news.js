import express from 'express';
import {
    getTopHeadlines,
    getEverything,
    getSpecificNews,
    getSources
} from '../controllers/news.js';

const router = express.Router();

router.get('/top-headlines', getTopHeadlines);

router.get('/everything', getEverything);

router.get('/news/:url', getSpecificNews);

router.get('/sources', getSources);

export default router;

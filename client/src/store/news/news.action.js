import { createAction } from "../../utils/reducer/reducer.utils";
import { NEWS_ACTION_TYPES } from "./news.types";

// Action creators
// Fetch news
export const fetchNewsStart = (country, categories, sources, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_START, { country, categories, sources, page });

export const fetchNewsSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS, news);

export const fetchNewsFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_FAILED, errorMessage);

// Fetch news by top headlines
export const fetchNewsByEverythingStart = ({ country, source, from, to, q, sortBy }) => 
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_START, { country, source, from, to, q, sortBy });

export const fetchNewsByEverythingSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_SUCCESS, news);

export const fetchNewsByEverythingFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_FAILED, errorMessage);

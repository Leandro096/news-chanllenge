import { createAction } from "../../utils/reducer/reducer.utils";
import { NEWS_ACTION_TYPES } from "./news.types";

// Action creators
// Fetch news
export const fetchNewsStart = (queries) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_START, queries);

export const fetchNewsSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS, news);

export const fetchNewsFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_FAILED, errorMessage);

// Fetch news by top headlines
export const fetchNewsByEverythingStart = (queries) => 
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_START, queries);

export const fetchNewsByEverythingSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_SUCCESS, news);

export const fetchNewsByEverythingFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_FAILED, errorMessage);

// Set current page
export const setCurrentPage = (page) =>
    createAction(NEWS_ACTION_TYPES.SET_CURRENT_PAGE, page);

import { createAction } from "../../utils/reducer/reducer.utils";
import { NEWS_ACTION_TYPES } from "./news.types";

export const fetchNewsStart = (country, categories, sources, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_START, { country, categories, sources, page });

export const fetchNewsSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS, news);

export const fetchNewsFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_FAILED, errorMessage);

export const fetchNewsByEverythingStart = ({ country, source, from, to, q, sortBy }) => 
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_START, { country, source, from, to, q, sortBy });

export const fetchNewsByEverythingSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_SUCCESS, news);

export const fetchNewsByEverythingFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_FAILED, errorMessage);

export const fetchNewsByCategoryStart = (category, country, sources, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_START, { category, country, sources, page });

export const fetchNewsByCategorySuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_SUCCESS, news);

export const fetchNewsByCategoryFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_FAILED, errorMessage);

export const fetchNewsBySearchStart = (searchQuery, category, country, sources, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_START, { searchQuery, category, country, sources, page });

export const fetchNewsBySearchSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_SUCCESS, news);

export const fetchNewsBySearchFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_FAILED, errorMessage);

export const fetchNewsBySourceStart = (source, country, categories, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SOURCE_START, { source, country, categories, page });

export const fetchNewsBySourceSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SOURCE_SUCCESS, news);

export const fetchNewsBySourceFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SOURCE_FAILED, errorMessage);

export const fetchNewsByCountryStart = (country, categories, sources, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_COUNTRY_START, { country, categories, sources, page });

export const fetchNewsByCountrySuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_COUNTRY_SUCCESS, news);

export const fetchNewsByCountryFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_COUNTRY_FAILED, errorMessage);

export const fetchNewsByLanguageStart = (language, country, categories, sources, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_LANGUAGE_START, { language, country, categories, sources, page });

export const fetchNewsByLanguageSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_LANGUAGE_SUCCESS, news);

export const fetchNewsByLanguageFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_LANGUAGE_FAILED, errorMessage);

export const fetchNewsByUserPreferencesStart = (userPreferences, country, categories, sources, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_USER_PREFERENCES_START, { userPreferences, country, categories, sources, page });

export const fetchNewsByUserPreferencesSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_USER_PREFERENCES_SUCCESS, news);

export const fetchNewsByUserPreferencesFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_USER_PREFERENCES_FAILED, errorMessage);

export const fetchNewsByFiltersStart = (filters, page) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_FILTERS_START, { filters, page });

export const fetchNewsByFiltersSuccess = (news) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_FILTERS_SUCCESS, news);

export const fetchNewsByFiltersFailed = (errorMessage) =>
    createAction(NEWS_ACTION_TYPES.FETCH_NEWS_BY_FILTERS_FAILED, errorMessage);

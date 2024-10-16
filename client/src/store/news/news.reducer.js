import { NEWS_ACTION_TYPES } from "./news.types";

const INITIAL_STATE = {
    articles: [],
    errorMessage: null,
    isLoading: false,
};

export const newsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEWS_ACTION_TYPES.FETCH_NEWS_START:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_START:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_START:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SOURCE_START:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_COUNTRY_START:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_LANGUAGE_START:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_USER_PREFERENCES_START:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_FILTERS_START:
            return {
                ...state,
                isLoading: true,
            };
        case NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_SUCCESS:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_SUCCESS:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SOURCE_SUCCESS:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_COUNTRY_SUCCESS:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_LANGUAGE_SUCCESS:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_USER_PREFERENCES_SUCCESS:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_FILTERS_SUCCESS:
            return {
                ...state,
                articles: payload,
                isLoading: false,
            };
        case NEWS_ACTION_TYPES.FETCH_NEWS_FAILED:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_FAILED:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_FAILED:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_SOURCE_FAILED:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_COUNTRY_FAILED:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_LANGUAGE_FAILED:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_USER_PREFERENCES_FAILED:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_FILTERS_FAILED:
            return {
                ...state,
                errorMessage: payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

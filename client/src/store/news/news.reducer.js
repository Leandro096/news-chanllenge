import { NEWS_ACTION_TYPES } from "./news.types";

const INITIAL_STATE = {
    articles: [],
    errorMessage: null,
    isLoading: false,
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
};

export const newsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEWS_ACTION_TYPES.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload,
            };
        case NEWS_ACTION_TYPES.FETCH_NEWS_START:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_START:
            return {
                ...state,
                errorMessage: null,
                isLoading: true,
            };
        case NEWS_ACTION_TYPES.FETCH_NEWS_SUCCESS:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_SUCCESS:
            return {
                ...state,
                articles: payload.articles,
                currentPage: payload.currentPage,
                totalPages: payload.totalPages,
                totalResults: payload.totalResults,
                isLoading: false,
            };
        case NEWS_ACTION_TYPES.FETCH_NEWS_FAILED:
        case NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_FAILED:
            return {
                ...state,
                errorMessage: payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

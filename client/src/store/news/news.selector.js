import { createSelector } from 'reselect';

export const selectNewsReducer = state => state.news;

export const selectNewsArticles = createSelector(
    [selectNewsReducer],
    news => news.articles
);

export const selectNewsErrorMessage = createSelector(
    [selectNewsReducer],
    news => news.errorMessage
);

export const selectIsNewsLoading = createSelector(
    [selectNewsReducer],
    news => news.isLoading
);

export const selectNewsTotalPages = createSelector(
    [selectNewsReducer],
    news => news.totalPages
);

export const selectNewsCurrentPage = createSelector(
    [selectNewsReducer],
    news => news.currentPage
);

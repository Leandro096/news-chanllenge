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

export const selectNewsCountry = createSelector(
    [selectNewsReducer],
    news => news.country
);

export const selectNewsCategories = createSelector(
    [selectNewsReducer],
    news => news.categories
);

export const selectNewsSources = createSelector(
    [selectNewsReducer],
    news => news.sources
);

export const selectNewsSearchQuery = createSelector(
    [selectNewsReducer],
    news => news.searchQuery
);

export const selectNewsLanguage = createSelector(
    [selectNewsReducer],
    news => news.language
);

export const selectNewsUserPreferences = createSelector(
    [selectNewsReducer],
    news => news.userPreferences
);

export const selectNewsFilters = createSelector(
    [selectNewsReducer],
    news => news.filters
);

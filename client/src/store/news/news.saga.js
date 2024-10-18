import {
    call,
    put,
    takeLatest,
    all,
} from 'redux-saga/effects';
import { NEWS_ACTION_TYPES } from './news.types';
import {
    fetchNewsSuccess,
    fetchNewsFailed,
    fetchNewsByEverythingSuccess,
    fetchNewsByEverythingFailed,
    fetchNewsByCategorySuccess,
    fetchNewsByCategoryFailed,
    fetchNewsBySearchSuccess,
    fetchNewsBySearchFailed,
    fetchNewsBySourceSuccess,
    fetchNewsBySourceFailed,
    fetchNewsByCountrySuccess,
    fetchNewsByCountryFailed,
    fetchNewsByLanguageSuccess,
    fetchNewsByLanguageFailed,
    fetchNewsByUserPreferencesSuccess,
    fetchNewsByUserPreferencesFailed,
    fetchNewsByFiltersSuccess,
    fetchNewsByFiltersFailed,
} from './news.action';

import {
    getNews,
    getEverything,
} from '../../utils/db/news';

export function* fetchNewsStart({ payload }) {
    const { country, categories, sources, page } = payload;
    try {
        const data = yield call(getNews, country, categories, sources, page);
        yield put(fetchNewsSuccess(data));
    } catch (error) {
        yield put(fetchNewsFailed(error.message));
    }
};

export function* fetchNewsByEverythingStart({ payload }) {
    try {
        const data = yield call(getEverything, payload);
        yield put(fetchNewsByEverythingSuccess(data));
    } catch (error) {
        yield put(fetchNewsByEverythingFailed(error.message));
    }
};

export function* fetchNewsByCategoryStart({ payload }) {
    const { category, country, sources, page } = payload;
    try {
        const data = yield call(getNews, country, category, sources, page);
        yield put(fetchNewsByCategorySuccess(data));
    } catch (error) {
        yield put(fetchNewsByCategoryFailed(error.message));
    }
};

export function* fetchNewsBySearchStart({ payload }) {
    const { searchQuery, category, country, sources, page } = payload;
    try {
        const data = yield call(getEverything, searchQuery, category, country, sources, page);
        yield put(fetchNewsBySearchSuccess(data));
    } catch (error) {
        yield put(fetchNewsBySearchFailed(error.message));
    }
};

export function* fetchNewsBySourceStart({ payload }) {
    const { source, country, categories, page } = payload;
    try {
        const data = yield call(getNews, country, categories, source, page);
        yield put(fetchNewsBySourceSuccess(data));
    } catch (error) {
        yield put(fetchNewsBySourceFailed(error.message));
    }
};

export function* fetchNewsByCountryStart({ payload }) {
    const { country, categories, sources, page } = payload;
    try {
        const data = yield call(getNews, country, categories, sources, page);
        yield put(fetchNewsByCountrySuccess(data));
    } catch (error) {
        yield put(fetchNewsByCountryFailed(error.message));
    }
};

export function* fetchNewsByLanguageStart({ payload }) {
    const { language, country, categories, sources, page } = payload;
    try {
        const data = yield call(getNews, language, country, categories, sources, page);
        yield put(fetchNewsByLanguageSuccess(data));
    } catch (error) {
        yield put(fetchNewsByLanguageFailed(error.message));
    }
};

export function* fetchNewsByUserPreferencesStart({ payload }) {
    const { userPreferences, country, categories, sources, page } = payload;
    try {
        const data = yield call(getNews, userPreferences, country, categories, sources, page);
        yield put(fetchNewsByUserPreferencesSuccess(data));
    } catch (error) {
        yield put(fetchNewsByUserPreferencesFailed(error.message));
    }
};

export function* fetchNewsByFiltersStart({ payload }) {
    const { filters, page } = payload;
    try {
        const data = yield call(getNews, filters, page);
        yield put(fetchNewsByFiltersSuccess(data));
    } catch (error) {
        yield put(fetchNewsByFiltersFailed(error.message));
    }
};

export function* onFetchNewsStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_START, fetchNewsStart);
};

export function* onFetchNewsByEverythingStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_START, fetchNewsByEverythingStart);
};

export function* onFetchNewsByCategoryStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_CATEGORY_START, fetchNewsByCategoryStart);
};

export function* onFetchNewsBySearchStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SEARCH_START, fetchNewsBySearchStart);
};

export function* onFetchNewsBySourceStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_SOURCE_START, fetchNewsBySourceStart);
};

export function* onFetchNewsByCountryStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_COUNTRY_START, fetchNewsByCountryStart);
};

export function* onFetchNewsByLanguageStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_LANGUAGE_START, fetchNewsByLanguageStart);
};

export function* onFetchNewsByUserPreferencesStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_USER_PREFERENCES_START, fetchNewsByUserPreferencesStart);
};

export function* onFetchNewsByFiltersStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_FILTERS_START, fetchNewsByFiltersStart);
};

export function* newsSagas() {
    yield all([
        call(onFetchNewsStart),
        call(onFetchNewsByEverythingStart),
        call(onFetchNewsByCategoryStart),
        call(onFetchNewsBySearchStart),
        call(onFetchNewsBySourceStart),
        call(onFetchNewsByCountryStart),
        call(onFetchNewsByLanguageStart),
        call(onFetchNewsByUserPreferencesStart),
        call(onFetchNewsByFiltersStart),
    ]);
};

import {
    call, put,
    takeLatest,
    all,
} from 'redux-saga/effects';
import { NEWS_ACTION_TYPES } from './news.types';
import {
    fetchNewsSuccess,
    fetchNewsFailed,
    fetchNewsByEverythingSuccess,
    fetchNewsByEverythingFailed,
} from './news.action';

import { getNews, getEverything } from '../../utils/db/news';

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

export function* onFetchNewsStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_START, fetchNewsStart);
};

export function* onFetchNewsByEverythingStart() {
    yield takeLatest(NEWS_ACTION_TYPES.FETCH_NEWS_BY_EVERYTHING_START, fetchNewsByEverythingStart);
};

export function* newsSagas() {
    yield all([
        call(onFetchNewsStart),
        call(onFetchNewsByEverythingStart),
    ]);
};

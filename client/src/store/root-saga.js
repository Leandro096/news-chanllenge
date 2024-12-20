import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.saga';
import { newsSagas } from './news/news.saga';

export function* rootSaga() {
    yield all([
        call(userSagas),
        call(newsSagas),
    ]);
}

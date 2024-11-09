import { takeLatest, call, put, all } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';

import {
    setCurrentUser,
    updatePreferenceSuccess,
    updatePreferenceFailed,
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    signOutSuccess,
    signOutFailed,
    checkUserSessionFailed,
    emailSignInStart,
} from './user.action.js';

import {
    createUser,
    getCurrentUser,
    updateUserPreference,
    login,
    logout,
} from '../../utils/db/user.js';
import { deleteToken, saveToken } from '../../utils/services/api/secureToken.js';

export function* checkUserSession() {
    try {
        const userAuth = yield call(getCurrentUser);

        if (userAuth) {
            yield put(setCurrentUser(userAuth));
        } else {
            yield call(deleteToken);
            yield put(checkUserSessionFailed('No user session found'));
        }
    } catch (error) {
        yield put(checkUserSessionFailed(error.message));
    }
}

export function* updateUserPreferenceStart({ payload: preference }) {
    const { countries, categories, sources, language } = preference;
    try {
        const updatedPreference = yield call(updateUserPreference, { countries, categories, sources, language });
        console.log(updatedPreference);
        yield put(updatePreferenceSuccess(updatedPreference));
        
        // Actualizar el usuario actual después de actualizar la preferencia
        const userAuth = yield call(getCurrentUser);
        yield put(setCurrentUser(userAuth));
    } catch (error) {
        yield put(updatePreferenceFailed(error.message));
    }
}

export function* signUpUser({ payload: { email, password, name, language } }) {
    try {
        yield call(createUser, { email, password, name, language });
        yield put(signUpSuccess({ email, password, name, language }));
        // Iniciar sesión después de registrarse
        yield put(emailSignInStart({ email, password }));
    } catch (error) {
        yield put(signUpFailed(error.message));
    }
}

export function* signInWithEmail({ payload: credentials }) {
    const signInCredentials = { email: credentials.email, password: credentials.password };
    try {
        // Lógica para iniciar sesión con correo y contraseña
        const user = yield call(login, signInCredentials);
        saveToken(user.token);
        yield put(signInSuccess(user));
    } catch (error) {
        yield put(signInFailed(error.message));
    }
}

export function* signOut() {
    try {
        yield call(logout);
        yield call(deleteToken);
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailed(error.message));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, checkUserSession);
}

export function* onUpdatePreferenceStart() {
    yield takeLatest(USER_ACTION_TYPES.UPDATE_PREFERENCE_START, updateUserPreferenceStart);
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUser);
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
    yield all([
        call(onCheckUserSession),
        call(onUpdatePreferenceStart),
        call(onSignUpStart),
        call(onEmailSignInStart),
        call(onSignOutStart),
    ]);
}

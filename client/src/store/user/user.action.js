import { createAction } from '../../utils/reducer/reducer.utils.js';
import { USER_ACTION_TYPES } from './user.types';

// Action creators
// Set current user action creator
export const setCurrentUser = (user) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const checkUserSessionFailed = (errorMessage) =>
    createAction(USER_ACTION_TYPES.CHECK_USER_SESSION_FAILED, errorMessage);

// Update user preferences action creators
export const updatePreferenceStart = (preference) =>
    createAction(USER_ACTION_TYPES.UPDATE_PREFERENCE_START, preference);

export const updatePreferenceSuccess = (preference) =>
    createAction(USER_ACTION_TYPES.UPDATE_PREFERENCE_SUCCESS, preference);

export const updatePreferenceFailed = (errorMessage) =>
    createAction(USER_ACTION_TYPES.UPDATE_PREFERENCE_FAILED, errorMessage);

// Sign in action creators
export const emailSignInStart = (credentials) =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, credentials);

export const signInSuccess = (user) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (errorMessage) =>
    createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, errorMessage);

// Sign up action creators
export const signUpStart = ({ email, password, name }) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, name });

export const signUpSuccess = ({ email, password, name, language }) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { email, password, name, language });

export const signUpFailed = (errorMessage) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, errorMessage);

// Sign out action creators
export const signOutStart = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (errorMessage) =>
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, errorMessage);

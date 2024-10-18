import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: [],
  errorMessage: null,
  isLoading: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
    case USER_ACTION_TYPES.SIGN_UP_START:
    case USER_ACTION_TYPES.SIGN_OUT_START:
    case USER_ACTION_TYPES.CHECK_USER_SESSION:
    case USER_ACTION_TYPES.UPDATE_PREFERENCE_START:
      return { ...state, errorMessage: null, isLoading: true };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTION_TYPES.SET_CURRENT_USER:
    case USER_ACTION_TYPES.UPDATE_PREFERENCE_SUCCESS:
      return { ...state, errorMessage: null, currentUser: payload, isLoading: false };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, isLoading: false };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.CHECK_USER_SESSION_FAILED:
    case USER_ACTION_TYPES.UPDATE_PREFERENCE_FAILED:
      return { ...state, errorMessage: payload, isLoading: false };
    default:
      return state;
  }
};

export default userReducer;

/* eslint-disable no-unused-vars */
import { AUTH_FAIL, AUTH_START, AUTH_SUCCESS } from '../../constants/actionTypes';
import updateObject from '../utility';
import { authInitialState } from '../initialState';

const authStart = (state, action) => updateObject(state, { error: null, loading: true });

const authSuccess = (state, action) => updateObject(state, {
  token: action.idToken,
  userId: action.userId,
  error: null,
  loading: false,
  message: action.authData.message,
});

const authFail = (state, action) => updateObject(state, {
  error: action.error,
  loading: false,
});

const reducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;

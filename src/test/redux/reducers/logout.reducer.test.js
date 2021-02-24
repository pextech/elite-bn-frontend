import { LOGOUT_FAILED, LOGOUT_SUCCESS, LOGIN_SUCCESS } from '../../../store/actions/ActionTypes';

import userReducer from '../../../store/reducers/user';

describe('Logout reducers ', () => {
  let userLogoutReducer;
  const initialState = {
    isLoggedIn: true,
    newState: null,
  };
  test('Test logout  reducer for default  state', () => {
    userLogoutReducer = userReducer(initialState, {});
    expect(userLogoutReducer).toEqual({
      isLoggedIn: true,
      newState: null,
    });
  });
  test('Test logout  request', () => {
    let user;
    const action = { type: LOGIN_SUCCESS, payload: user };
    userLogoutReducer = userReducer(initialState, action);
    expect(userLogoutReducer).toEqual({
      isLoggedIn: true,
      newState: action.payload,
    });
  });
  test('Test logout success ', () => {
    userLogoutReducer = userReducer(initialState, { type: LOGOUT_SUCCESS });
    expect(userLogoutReducer).toEqual({
      isLoggedIn: false,
      newState: null,
    });
  });
  test('Test logout failed ', () => {
    userLogoutReducer = userReducer(initialState, { type: LOGOUT_FAILED });
    expect(userLogoutReducer).toEqual({
      isLoggedIn: true,
    });
  });
});

import { authStart, authFail, authSuccess, auth } from '../../../store/actions/auth';
import { AUTH_START, AUTH_FAIL, AUTH_SUCCESS } from '../../../constants/actionTypes';

describe('Test Signup action', () => {
  it('should create an action to start Signup', () => {
    const expectedAction = {
      type: AUTH_START,
    };
    expect(authStart()).toEqual(expectedAction);
  });
  it('should create an action for Signup fail', () => {
    const expectedAction = {
      type: AUTH_FAIL,
      error: 'error',
    };
    expect(authFail('error')).toEqual(expectedAction);
  });

  it('should create an action for Signup success', () => {
    const expectedAction = {
      type: AUTH_SUCCESS,
      authData: {
        id: 1,
        token: 'tokenid',
      },
    };
    expect(authSuccess({ id: 1, token: 'tokenid' })).toEqual(expectedAction);
  });
});

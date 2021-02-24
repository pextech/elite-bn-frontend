import { LOGOUT_FAILED, LOGOUT_SUCCESS } from '../../../store/actions/ActionTypes';

import { logoutFailed, logoutSuccess } from '../../../store/actions/LogoutAction';

describe('Logout actions ', () => {
  test('Test logout success', () => {
    const actionSuccess = logoutSuccess();
    expect(actionSuccess).toEqual({
      type: LOGOUT_SUCCESS,
    });
  });
  test('Test logout failed', () => {
    const actionSuccess = logoutFailed();
    expect(actionSuccess).toEqual({
      type: LOGOUT_FAILED,
    });
  });
});

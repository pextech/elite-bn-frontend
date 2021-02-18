import reducer from '../../../store/reducers/auth';
import { authInitialState as initialState } from '../../../store/initialState';
import { authStart, authFail, authSuccess } from '../../../store/actions/auth';
import { auth } from '../../../store/actions/index';

describe('auth Reducers', () => {
  it('should return initialState when there is no action', () => {
    const res = reducer(initialState, {});
    expect(res).toMatchObject(initialState);
  });
  it('should return an updated state the when AUTH_SUCCESS', () => {
    expect(
      reducer(
        {
          error: null,
          loading: false,
          message: null,
          token: null,
          userId: null,
        },
        authSuccess({
          message: 'message',
        })
      )
    ).toEqual({
      error: null,
      loading: false,
      token: undefined,
      userId: undefined,
      message: 'message',
    });
  });

  it('should return an updated state the when AUTH_FAIL', () => {
    expect(
      reducer(
        {
          error: null,
          loading: false,
          message: null,
          token: null,
          userId: null,
        },
        authFail('error')
      )
    ).toEqual({
      error: 'error',
      loading: false,
      message: null,
      token: null,
      userId: null,
    });
  });

  it('should return an updated state the when AUTH_FAIL', () => {
    expect(
      reducer(
        {
          error: null,
          loading: false,
          message: null,
          token: null,
          userId: null,
        },
        authStart()
      )
    ).toEqual({
      error: null,
      loading: true,
      message: null,
      token: null,
      userId: null,
    });
  });

  it('should auth be defined ', async () => {
    expect(await auth('cele', 'kaga', 'kaa@gmail.com', 'password123')).toBeTruthy();
  });
});

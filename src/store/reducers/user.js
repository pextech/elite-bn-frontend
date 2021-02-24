import { LOGOUT_FAILED, LOGOUT_SUCCESS, LOGIN_SUCCESS } from '../actions/ActionTypes';

const initialState = {
  isLoggedIn: false,
  newState: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        newState: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        newState: null,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        isLoggedIn: true,
        newState: action.payload,
      };
    default:
      return state;
  }
};
export default users;

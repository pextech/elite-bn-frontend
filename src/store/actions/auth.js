import axios from 'axios';

import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from '../../constants/actionTypes';

export const authStart = () => ({
  type: AUTH_START,
});

export const authSuccess = (authData) => ({
  type: AUTH_SUCCESS,
  authData,
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  error,
});

export const auth = (firstName, lastName, email, password) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    firstName,
    lastName,
    email,
    password,
  };
  const url = 'https://elite-barefoot-api.herokuapp.com/api/v1/users/signup';
  axios
    .post(url, authData)
    .then((response) => {
      dispatch(authSuccess(response.data));
    })
    .catch((error) => {
      const message =
        (error.response &&
          error.response.data &&
          (error.response.data.message || error.response.data.Message)) ||
        error.message ||
        error.toString();
      dispatch(authFail(message));
    });
};

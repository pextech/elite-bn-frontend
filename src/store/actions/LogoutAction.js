import { LOGOUT_FAILED, LOGOUT_SUCCESS } from './ActionTypes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
const logoutFailed = () => {
  return {
    type: LOGOUT_FAILED,
  };
};
const token = localStorage.getItem('jwtToken');

const logoutActionCreator = () => {
  return (dispatch) => {
    if (token) {
      dispatch(logoutSuccess);
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('userInfo');
    } else {
      toast.error('User logout failed');

      dispatch(logoutFailed);
    }
  };
};

export { logoutSuccess, logoutFailed, logoutActionCreator };

import axios from 'axios';
import { successToast, errorToast } from '../../utils/toast';
import setAuthorizationToken from '../../utils/setAuthorization';
import { LOGIN_SUCCESS } from '../actions/ActionTypes';

const handle = async (state, history, dispatch) => {
  axios.post('https://elite-staging.herokuapp.com/api/v1/users/signin', state)
    .then((response) => {
      const { token } = response.data.data;
      const { data } = response.data;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      localStorage.setItem('userInfo', JSON.stringify(data));
      const { fullName } = response.data.data.userInfo;
      successToast(fullName);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.data });
      history.push('/dashboard/');
    })
    .catch((error) => {
      const getError = error.response ? error.response.data.message : error;
      const errorMessage = [getError.details ? getError.details[0].message : getError];

      errorToast(errorMessage);
    });
};

export default handle;

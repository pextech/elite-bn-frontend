import axios from 'axios';
import { successToast, errorToast } from '../../utils/toast';
import setAthorizationToken from '../../utils/setAuthorization';

const handle = async (state, history, dispatch) => {
  axios.post('http://localhost:5000/api/v1/users/signin', state)
    .then((response) => {
      const { token } = response.data.data;
      const { data } = response.data;
      localStorage.setItem('jwtToken', token);
      setAthorizationToken(token);
      localStorage.setItem('userInfo', JSON.stringify(data));
      const { fullName } = response.data.data.userInfo;
      successToast(fullName);
      dispatch({ type: 'LOGGEDIN', payload: response.data.data });
      history.push('/dashboard/profile');
    })
    .catch((error) => {
      const getError = error.response ? error.response.data.message : error;
      const errorMessage = [getError.details ? getError.details[0].message : getError];

      errorToast(errorMessage);
    });
};

export default handle;

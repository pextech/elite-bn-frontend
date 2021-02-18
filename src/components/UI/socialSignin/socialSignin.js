import React from 'react';
import fbIcon from '../../../assets/icons8-facebook.svg';
import googleIcon from '../../../assets/icons8-google.svg';
import Button from '../Button/Button';

const googleHandler = () => {
  window.open('https://elite-staging.herokuapp.com/api/v1/users/oauth/google', '_self');
};
const facebookHandler = () => {
  window.open('https://elite-staging.herokuapp.com/api/v1/users/oauth/facebook', '_self');
};

const socialSignin = () => (
  <div>
    <Button clicked={() => googleHandler()} btnType="GoogleSignup">
      <img className="h-5 w-5 mr-3" src={googleIcon} alt="google" />
      <p>Continue with Google</p>
    </Button>

    <Button clicked={() => facebookHandler()} btnType="fbSignup">
      <img className="h-5 w-5 mr-3" src={fbIcon} alt="facebook" />
      <p>Continue with Facebook</p>
    </Button>
  </div>
);

export default socialSignin;

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import 'react-toastify/dist/ReactToastify.css';
import accomodationImage from '../../assets/images/accomodationImage.png';
import { auth } from '../../store/actions/index';
import Header from '../../components/Header/NavBar';
import Footer from '../../components/Footer/Footer';
import SocialSignin from '../../components/UI/socialSignin/socialSignin';
import Spinner from '../../components/UI/Spinner/Spinner';
import SignupSkeleton from '../../skeletons/Signup/SignupSkeleton';

const Auth = (props) => {
  let registerButton = <Button btnType="Success">Register</Button>;

  const [skeleton, setSkeleton] = useState(false);

  useEffect(() => {
    setSkeleton(true);
    const timer = setTimeout(() => {
      setSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (props.loading) {
    registerButton = (
      <Button btnType="Success" disabled>
        <Spinner />
        Register
      </Button>
    );
  }
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async (data) => {
    await props.onAuth(data.firstName, data.lastName, data.email, data.password);
    reset();
  };

  const { error, message } = props;

  useEffect(() => {
    if (message) {
      toast.success('Account created successfully, Check your email to verify the account.', {
        delay: 10000,
      });
      props.history.push({
        pathname: '/login',
      });
    } else if (error && error.includes('Network')) {
      toast.warning('Sorry, We are in troubleshoting the system');
    } else if (error) {
      toast.error(props.error);
    }
  }, [props.message, props.error]);

  return (
    <div className="bg-gray-100 w-full m-0">
      <Header />
      {skeleton && <SignupSkeleton />}
      {!skeleton && (
        <div className="grid grid-cols-1 md:grid-cols-3 card hover:shadow-lg w-3/4 mx-auto">
          <div className="md:w-4/6 md:col-span-2 py-4 mx-auto">
            <h1 className="text-gray-600 font-medium text-lg mx-4">Get started for free</h1>
            <p className="text-blue-500 mx-4">Over 1000 campanies trust Barefoot-nomad worldwide</p>
            <div className={classes.Auth}>
              <ToastContainer />
              <form
                data-testid="form"
                className="grid mx-0 mt-4 md:grid-cols-2 gap-1 w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  data-testid="first-name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="col-span-2 row-start-1 md:w-4/5 md:col-span-1 border-primary-100 rounded content-center p-4 my-4 center shadow-md h-10 text-primary-100"
                  ref={register({ required: true })}
                />
                <p className="col-span-2 md:col-span-1 text-red-500 text-center">
                  {errors.firstName && <span role="alert">No first name provided</span>}
                </p>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="col-span-2 md:col-span-1 md:row-start-1 border-primary-100 rounded content-center p-4 my-4 center shadow-md h-10 text-primary-100"
                  ref={register({ required: true })}
                />
                <p className="col-span-2 md:col-span-1 text-red-500 text-center">
                  {errors.lastName && <span role="alert">No last name provided</span>}
                </p>

                <input
                  data-testid="email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  className="col-span-2  border-primary-100 rounded p-4 my-4  shadow-md h-10 text-primary-100"
                  ref={register({ required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                />
                <p className="col-span-2 text-red-500 text-center">
                  {errors.email && errors.email.type === 'required' && (
                    <span role="alert">No email provided</span>
                  )}
                </p>

                <p className="col-span-2 text-red-500 text-center">
                  {errors.email && errors.email.type === 'pattern' && (
                    <span role="alert">E-mail is not valid</span>
                  )}
                </p>

                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="col-span-2  border-primary-100 rounded p-4 my-4 shadow-md h-10 text-primary-100"
                  ref={register({ required: true, minLength: 8 })}
                />
                <p className="w-full col-span-2 text-red-500 text-center">
                  {errors.password && errors.password.type === 'required' && (
                    <span role="alert">No password provided</span>
                  )}
                </p>

                <p className="w-full col-span-2 text-red-500 text-center">
                  {errors.password && errors.password.type === 'minLength' && (
                    <span role="alert">Password should be at-least 8 characters.</span>
                  )}
                </p>

                {registerButton}
              </form>
              <p>Or use your social accounts to register</p>

              <SocialSignin />

              <p>
                Already have an account?{' '}
                <a className="text-blue-500 text-sm font-medium" href="/login">
                  Sign in
                </a>
              </p>
            </div>
          </div>
          <div className="col-start-3 hidden md:block">
            <img
              src={accomodationImage}
              alt="accomodation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
  message: state.auth.message,
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (firstName, lastName, email, password) =>
    dispatch(auth(firstName, lastName, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import FooterOne from '../LandingPage/Footer';
import Navbar from '../Header/NavBar';
import DropMenu from '../LandingPage/DropMenu';
import ResetPasswordSkeleton from '../../skeletons/password/ResetPasswordSkeleton';

import { reset } from '../../store/actions/index';
import ChangePassword from './ChangePassword';

// toast.configure();
const ResetPassword = (props) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [validate, setValidate] = useState(false);
  const newState = useSelector((state) => state);
  const [submitted, setSubmitted] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const forgotPassword = async () => {
    axios.post('https://elite-staging.herokuapp.com/api/v1/users/forgotPassword', { email }).then((response) => {
      setToken(response.data.data.token);
      setMessage(response.data.message);
      setError(false);
      setSubmitted(true);
      return response;
    }).catch(() => {
      setError(true);
      toast.error('Email is not recognized', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSubmitted(false);
    });
  };
  const handleSubmit = (e) => {
    if (email) {
      toast.info('Email is being Verified', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    e.preventDefault();
    forgotPassword(email);
    props.OnReset(email, token, message);
    setFormSubmit(true);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar toggle={toggle} />
      <DropMenu isOpen={isOpen} toggle={toggle} />
      {loading && <ResetPasswordSkeleton />}
      { !loading && !submitted && (
      <section className="bg-gray-100 p-6">
        <div className="bg-white rounded-2xl items-center content-center shadow-md p-6 sm:p-2">
          <div className="items-center md:m-6 md:p-6 xs:m-2 xs:p-2">
            <h3 className="text-primary-100 text-2xl content-center text-center mt-5">Reset password</h3>
            <form
              onSubmit={handleSubmit}
              className="content-center m-3 p-3 md:m-0.5 flex justify-center h-auto flex-col "
            >
              {/* <div className="text-md content-center text-center m-2">
              </div> */}
              <div className="m-3 p-3 flex flex-col justify-center items-center">
                <input data-testid="input" type="email" name="email" id="email" placeholder="Your email" value={email} onChange={(e) => { setEmail(e.target.value); }} className="w-1/2 sm:w-full border-primary-100 rounded content-center p-4 m-4 center shadow-md h-10 text-primary-100" required />
                <button type="submit" value="Submit" name="submit" className="w-1/2 sm:w-full border-primary-100 bg-primary md:hover:bg-purple-500 m-4 rounded content-center center shadow-md h-10 text-white">Reset your password</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
      )}
      {error !== true && submitted === true && (token !== undefined || token !== '') && <ChangePassword token={token} /> }
      <FooterOne />
    </>
  );
};
export const mapStateToProps = (state) => ({
  email: state.email,
  token: state.token,
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  OnReset: (email, token, message) => dispatch(reset(email, token, message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

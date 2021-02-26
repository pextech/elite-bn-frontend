/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChangePasswordSkeleton from '../../skeletons/password/ChangePasswordSkeleton';

const ChangePassword = ({ token }) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setComfirm] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const resetPassword = async () => {
    if (password.length < 6) {
      toast.error('password too short(6 digits min)', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (password !== confirm) {
      toast.error('Password Does not match', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (password.length >= 6 && password === confirm) {
      axios.put(`https://elite-staging.herokuapp.com/api/v1/users/resetpassword/${token}`, { password }).then((response) => {
        toast.success('Success Reset', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setMessage(response.data.message);
        setError(false);
        window.location.replace('/login');
        return response;
      }).catch(() => {
        setError(true);
        setLoading(false);
      });
    } else {
      setError(true);
    }
  };

  return (
    <>
      {/* <HomeNavComponent /> */}
      {loading && <ChangePasswordSkeleton />}
      {!loading && (
      <section className="bg-gray-100 p-6">
        <div className="bg-white h-full rounded-2xl items-center content-center shadow-md p-6 sm:p-2">
          <div className="items-center md:m-6 md:p-6 xs:m-2 xs:p-2">
            <h3 className="text-primary-100 text-2xl content-center text-center mt-5">Reset password</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                resetPassword(password);
                setFormSubmit(true);
              }}
              className="content-center m-3 p-3 md:m-0.5 flex justify-center h-auto flex-col "
            >
              <div className="text-md content-center text-center m-2">
                <h2 className="text-gray-700 xs:text-xs">Enter New password</h2>
              </div>
              <div className="m-3 p-3 flex flex-col justify-center items-center">
                <input data-testid="input" type="password" placeholder="New password" className="w-1/2 sm:w-full border-primary-100 rounded content-center p-4 m-4 center shadow-md h-10 text-primary-100" value={password} onChange={(e) => { setPassword(e.target.value); }} required />
                <input type="password" placeholder="Comfirm password" className="w-1/2 sm:w-full border-primary-100 rounded content-center p-4 m-4 center shadow-md h-10 text-primary-100" value={confirm} onChange={(e) => { setComfirm(e.target.value); }} required />
                <button type="submit" value="Submit" name="submit" className="w-1/2 sm:w-full border-primary-100 bg-primary md:hover:bg-purple-500 m-4 rounded content-center center shadow-md h-10 text-white">Reset your password</button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
      )}

      {/* <FooterOne /> */}
    </>
  );
};

export default ChangePassword;

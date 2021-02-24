/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import { AiOutlineDown } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import { IoLogOutOutline } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import jwt from 'jsonwebtoken';
import Skeleton from 'react-loading-skeleton';
import 'react-toastify/dist/ReactToastify.css';
import blank from '../../assets/blank.png';

const NavBar = (props) => {
  const [dropDown, setDropDown] = useState(false);
  const [loading, setLoading] = useState(true);

  const userInfo = jwt.decode(localStorage.getItem('jwtToken'));
  const logout = () => {
    toast.success('User logout successfully');
    props.LogoutAction();

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="col-span-full  w-full  col-start-3  col-end-14 shadow-xl  ">
        <header className="flex justify-between h-16 align-center items-center font-mainFont relative   ">
          <nav className="flex  w-full justify-between ">
            <div className="cursor-pointer">
              <Link to="/" className="pl-1 md:pl-8">
                Home
              </Link>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row w-2/4 ">
                <div className="profile flex-row flex mr-2 md:mr-7">
                  <div className="flex-row flex relative">
                    <img
                      className={`w-6 h-6 rounded-3xl  mr-1 ${loading ? 'hidden' : 'block'}`}
                      src={blank}
                      alt="profile"
                    />
                    <span className={`${loading ? 'block' : 'hidden'}`}>
                      <Skeleton circle width={30} height={30} />
                    </span>
                    <span className="text-sm mr-1 flex   w-24">
                      <span className={`${loading ? 'hidden' : 'block'} w-full`}>Rob dev</span>
                      <span className={`${loading ? 'block' : 'hidden'}  mx-1 my-2`}>
                        <Skeleton width={50} />
                      </span>

                      <AiOutlineDown
                        onClick={() => setDropDown(!dropDown)}
                        className={`${
                          loading ? 'hidden' : 'block'
                        } down text-xs ml-0.5 mt-1 cursor-pointer`}
                      />
                    </span>
                    <div>
                      <div
                        className="dropdown flex bg-white  shadow-xl flex-col absolute right-20 z-30 top-12 "
                        style={{ display: dropDown ? 'flex' : 'none' }}
                      >
                        <div className="flex py-2 px-4  cursor-pointer hover:bg-gray-500 hover:text-white">
                          <div className="drop-item">
                            <FaUserEdit className="mt-1" />
                          </div>
                          <div className="drop-item">
                            <Link to="/dashboard/profile/">
                              <span className="text-xs ml-2"> Profile</span>
                            </Link>
                          </div>
                        </div>
                        <div
                          className="logout flex py-2 px-4 cursor-pointer hover:bg-gray-500 hover:text-white "
                          onClick={logout}
                        >
                          <div className="drop-item">
                            <IoLogOutOutline className="mt-1" />
                          </div>
                          <div className="drop-item">
                            <span className="text-xs ml-2 cursor-pointer">Logout</span>
                          </div>
                        </div>
                      </div>
                      <div className={`${loading ? 'flex ml-0 md:ml-0' : 'flex ml-2 md:ml-4'}  `}>
                        <span>
                          <FiGlobe className={`text-lg ${loading ? 'hidden' : 'flex'} m-1`} />
                          <span className={`${loading ? 'block' : 'hidden'}`}>
                            <Skeleton circle width={30} height={30} />
                          </span>
                        </span>
                        <span className={`${loading ? 'hidden' : 'block'}`}>English</span>
                        <span className={`${loading ? 'block' : 'hidden'}  mx-1 my-2`}>
                          <Skeleton width={50} />
                        </span>
                        <span className={`${loading ? 'hidden' : 'block'}`}>
                          <AiOutlineDown className=" text-lg cursor-pointer pt-1 mt-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavBar;

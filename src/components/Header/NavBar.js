import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navCSS.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <div className="md:flex justify-between items-center bg-gray-100  md:px-20  px-5 p-2 h-full md:p-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-600 border-b-2 text-xl">
            <Link to="/">
              <span className="md:text-2xl font-bold">B</span>
              arefoot-Nomad
            </Link>
          </h1>
        </div>

        <button type="button" onClick={toggle}>
          <i
            id="bugger"
            className="fas fa-bars md:hidden text-xl focus:outline-none border-0 cursor-pointer"
          />
        </button>
      </div>
      <nav
        className={
          open
            ? 'md:flex justify-between items-center  text-gray-50'
            : 'hidden md:flex justify-between items-center  text-gray-50'
        }
      >
        <NavLink
          className="block mt-2 md:mr-5 text-center text-sm bg-blue-600 md:hover:bg-purple-500 py-1 px-6 font-medium  rounded-sm"
          to="./register"
        >
          Register
        </NavLink>
        <NavLink
          className="block mt-2 text-center md:mr-10 text-sm bg-blue-600 md:hover:bg-purple-500 py-1 px-6 font-medium rounded-sm"
          to="./login"
        >
          Login
        </NavLink>
        <div className="flex justify-end items-center text-gray-600">
          <i className="pt-1 fas fa-globe" />
          <p className="text-gray-600 md:text-1xs text-xs md:pl-2 pt-0.5 pl-1 text-center">
            English
          </p>
          <button data-testid="drop-down" type="button">
            <i className="pl-1 sm:pt-0.5 fas fa-angle-down" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

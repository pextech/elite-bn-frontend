import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toggle }) => (
  <div className="bg-test1 md:px-20   px-5 p-2 h-20 md:p-5">
    <nav className="flex justify-between">
      <div className="flex ">
        <Link to="/#" className="text-gray-100 border-b-2 text-xl">
          <span className="md:text-2xl font-bold">B</span>
          arefoot-Nomad
        </Link>
      </div>

      <i id="bugger" className="fas fa-bars md:hidden text-xl cursor-pointer" onClick={toggle} />

      <div className="md:flex hidden">
        <div className="flex text-gray-50">
          <Link
            className="md:mr-5 text-sm bg-blue-600 md:px-8 md:py-2 md:hover:bg-purple-500  rounded-sm h-9"
            to="./register"
          >
            Register
          </Link>
          <Link
            className="md:mr-10 text-sm bg-blue-600 md:px-10 md:hover:bg-purple-500   md:py-2 rounded-sm h-9"
            to="./login"
          >
            Login
          </Link>
        </div>
        <div className="flex items-center text-gray-50">
          <i className="pt-1 fas fa-globe" />
          <p className="md:text-1xs text-xs md:pl-2 pt-0.5 pl-1 text-gray-100 text-center">
            English
          </p>
          <button type="button">
            <i className="pl-1 sm:pt-0.5 fas fa-angle-down" />
          </button>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;

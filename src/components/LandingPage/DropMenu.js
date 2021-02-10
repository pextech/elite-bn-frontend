import React from 'react';
import { Link } from 'react-router-dom';

const DropMenu = ({ isOpen, toggle }) => (
  <div className={isOpen ? 'bg-gray-900' : 'hidden'} onClick={toggle}>
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
        <Link to="/register" className="text-gray-50 pt-5 ">
          Register
        </Link>
        <Link to="/login" className="text-gray-50 pb-5">
          Login
        </Link>
      </div>
      <div className="text-gray-50 flex justify-center text-down pb-5">
        <i className="fas fa-globe pt-1" />
        <p className="px-2">English</p>
        <i className="fas fa-angle-down" />
      </div>
    </div>
  </div>
);

export default DropMenu;

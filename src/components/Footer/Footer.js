import React from 'react';
import { Link } from 'react-router-dom';

const Footer1 = () => (
  <div className="bg-white mt-6">
    <div className="md:flex justify-between md:pt-20 pt-10 px-5 md:px-20">
      <div className="flex pb-10">
        <ul className="pr-20 flex flex-col items-between">
          <li className="pb-4 hover:text-purple-600">
            <Link to="/">Destination</Link>
          </li>
          <li className="pb-4 hover:text-purple-600">
            <Link to="/">Accomodation</Link>
          </li>
          <li className="pb-4 hover:text-purple-600">
            <Link to="/">Homepage</Link>
          </li>
          <li className="pb-4 hover:text-purple-600">
            <Link to="/">Testimonials</Link>
          </li>
        </ul>
        <ul className="flex flex-col">
          <li className="pb-4 hover:text-purple-800">
            <Link to="/register">Register</Link>
          </li>
          <li className="hover:text-purple-800">
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h3>
          <span className="text-lg text-bold">B</span>
          arefoot Nomad
        </h3>
        <ul className="flex md:pt-5 pl-2 text-xl text-blue-600">
          <li>
            <Link to="/">
              <i className="fab fa-instagram pr-4 hover:text-purple-600" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fab fa-twitter pr-4 hover:text-purple-600" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="fab fa-linkedin-in hover:text-purple-600" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t-2 md:mx-8 mx-4 mt-4 pb-5" />
    <div className="md:px-10 px-5 text-center md:flex justify-between text-xs text-gray-600 pb-5">
      <h4 className="">&copy; Barefoot Nomad 2021 All rights reserved</h4>
      <ul className="flex justify-center">
        <li>
          <Link to="/" className="md:pr-10 pr-5 hover:text-black ">
            Privacy policy
          </Link>
        </li>
        <li className="hover:text-black">
          <Link to="/">Term of use</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer1;

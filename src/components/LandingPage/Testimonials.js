import React from 'react';
import { Link } from 'react-router-dom';
import TestmonialCard from './TestmonialCard';

const Testimonials = () => (
  <div>
    <div className="md:py-40 py-20 md:px-20 px-5">
      <div>
        <p className="md:text-4xl text-2xl text-blue-600 font-bold pb-5">CLIENT</p>
        <p className="md:text-3xl text-xl font-bold pb-10">TESTIMONIALS</p>
      </div>
      <div className="md:grid grid-cols-3 gap-10">
        <TestmonialCard />
        <TestmonialCard />
        <TestmonialCard />
      </div>
    </div>
    <div className="bg-purple-900 flex flex-col justify-center items-center">
      <p className="pt-20 text-2xl text-gray-100 text-center">Barefoot Nomad Makes Life Easy</p>
      <span className="text-xl text-gray-100"> &lt; Don’t Hesitate &gt;</span>
      <Link
        to="/#"
        type="button"
        className="my-20 border-5 bg-white px-14 py-2 hover:bg-purple-600  hover:text-gray-100 transiction duration-300 ease-in-out"
      >
        Get Started
      </Link>
    </div>
  </div>
);

export default Testimonials;

import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../barefoot.png';

const Index = () => (
  <div className="text-center">
    <Link
      className="block w-64 text-center mt-2 m-auto bg-gray-300 hover:shadow-lg"
      to="/counter"
    >
      Counter
    </Link>
    <h2 className="m-6">
      Welcome to Our Very beginning of this Barefoot Front-end Implementation
    </h2>
    <img src={img} alt="Barefoot" />
  </div>
);

export default Index;

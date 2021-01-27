import React from 'react';

const counterOutput = (props) => (
  <div className="w-screen bg-yellow-600 text-white py-2 pl-8">
    Current Counter:
    {' '}
    {props.value}
  </div>
);

export default counterOutput;

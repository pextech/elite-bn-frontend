import React from 'react';

const counterControl = (props) => (
  <div
    className="w-36 px-8 py-6 border-yellow-400
    shadow-sm font-bold cursor-pointer text-center inline-block bg-gray-400 ml-4"
    onClick={props.clicked}
  >
    {props.label}
  </div>
);

export default counterControl;

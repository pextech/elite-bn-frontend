import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const TextField = ({ label, changeValue, name, placeholder, isLoaded, ...props }) => {
  return (
    <div className="px-8 py-5">
      {!isLoaded ? (
        <Skeleton height={30} />
      ) : (
          <input
            onChange={changeValue}
            type="text"
            className="rounded  shadow-md w-full text-gray-700 border border-gray-100 py-2  px-3  spacey-3 border border-gray-100"
            name={name}
            placeholder={placeholder}
            {...props}
            autoComplete="off"
          />
        )}
    </div>
  );
};

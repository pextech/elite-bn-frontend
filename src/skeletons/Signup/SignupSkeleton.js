import React from 'react';
import Skeleton from 'react-loading-skeleton';
import classes from '../../containers/Auth/Auth.module.css';

const SignupSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 card hover:shadow-lg w-3/4 mx-auto">
    <div className="md:w-4/6 md:col-span-2 py-4 mx-auto">
      <h1 className="text-gray-600 font-medium text-lg mx-4">Get started for free</h1>
      <p className="text-blue-500 mx-4">Over 1000 campanies trust Barefoot-nomad worldwide</p>
      <div className={classes.Auth}>
        <form data-testid="form" className="grid grid-cols-1 mx-auto mt-4 md:gap-10 w-full">
          <div className="grid md:gap-6 md:grid-cols-2">
            <Skeleton height={35} />
            <Skeleton height={35} />
          </div>
          <Skeleton height={35} />
          <Skeleton height={35} />
          <Skeleton height={40} style={{ width: '70%' }} />
          <p>Or use your social accounts to register</p>
          <Skeleton height={40} style={{ width: '70%' }} />
          <Skeleton height={40} style={{ width: '70%' }} />
        </form>
      </div>
    </div>
    <div className="col-start-3 hidden md:block">
      <Skeleton className="object-cover" style={{ height: '100%' }} />
    </div>
  </div>
);

export default SignupSkeleton;

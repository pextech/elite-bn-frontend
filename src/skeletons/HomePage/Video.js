import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Video = () => (
  <section className="">
    <div className="bg-purple-600 rounded-2xl items-center content-center shadow-md p-6 sm:p-2">
      <div className="items-center md:m-6 md:p-6 xs:m-2 xs:p-2">
        <h3 className="text-primary-100 text-2xl content-center text-center mt-5">
          <Skeleton height={20} width={200} />
        </h3>
        <form className="content-center m-3 p-3 md:m-0.5 flex justify-center h-auto flex-col ">
          <div className="text-md content-center text-center m-2">
            <h2 className="text-gray-700 xs:text-xs">
              <Skeleton height={20} width={150} />
            </h2>
          </div>
          <div className="m-3 p-3 flex flex-col justify-center items-center">
            <Skeleton height={30} width={600} />
            <Skeleton height={30} width={600} />
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Video;

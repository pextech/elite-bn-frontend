/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';

const SideBar = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <>
      <div
        className={`bg-blue-700 text-white  ${
          sideBar ? 'w-48' : 'w-full'
        }     transition duration-1000 ease-in-out z-30 col-start-1 col-end-3  row-start-1 h-auto   border-white row-end-7 mb-0`}
      >
        <div className="logo text-white text-xl text-center pt-1 font-bold">
          <h1 className={`${sideBar ? 'block' : 'hidden'}   lg:block`}>
            <span>Barefoot-Nomad</span>
            <div className="h-0.5 my-1 bg-white w-4/5 text-center m-auto" />
          </h1>
          <h1 className={`${sideBar ? 'hidden' : 'block'} text-3xl text-center  lg:hidden`}>
            <span className="flex justify-center mb-2 items-center">
              <span> B</span>
              <AiOutlineRight
                onClick={() => setSideBar(!sideBar)}
                className="open cursor-pointer mt-1"
              />
            </span>

            <div className="h-0.5  bg-white w-7/12 text-center m-auto  " />
          </h1>
        </div>
        <div className="h-px my-5 w-full   text-center " />
      </div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <span
        className={`${
          sideBar ? 'block' : 'hidden'
        } z-30 absolute right-0 bg-white  close text-blue-600 text-3xl cursor-pointer`}
        onClick={() => setSideBar(!sideBar)}
      >
        <FaTimesCircle />
      </span>
    </>
  );
};

export default SideBar;

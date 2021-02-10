import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import VideoSkeleton from '../../skeletons/HomePage/Video';

const VideoCard = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="h-4/5 bg-test1 pb-10  px-5 p-2">
        <div className=" pt-15 flex flex-col justify-center items-center">
          <div className="md:text-2xl text-xl text-gray-50 text-center">
            <p> Try The Most Complete and Powerful Nomad management Platform</p>
            <p>in the World For Just a Click!</p>
          </div>
          <p className="text-white text-center text-2xs mt-12 mb-5">
            Enable Your Staff Members to work Wherever Your company has branches, dont hesitate
          </p>

          <div className=" items-center bg-purple-900  md:px-20 px-5 rounded-xl  ">
            {loading && <VideoSkeleton />}
            {!loading && (
              <div className="md:py-20 py-5">
                <ReactPlayer
                  width="100%"
                  height="300px"
                  controls
                  url="https://www.youtube.com/watch?v=6cq5Dc-sjOw"
                />
              </div>
            )}
            <div className="mt-3">
              <p className="md:text-2xl text-xl text-gray-100  text-center">
                Because your business and dreams deserve the best Access for just a click:
              </p>
              <ul className="flex flex-col items-center mt-5 text-gray-200">
                <li className="text-center pb-5">
                  <i className="text-yellow-400 fas fa-star pr-2" />
                  The best and fastest Nomad platform in the world
                </li>
                <li className="text-center pb-5">
                  <i className="text-yellow-400 fas fa-star pr-2" />
                  The best and fastest Nomad platform in the world
                </li>
                <li className="text-center pb-5">
                  <i className="text-yellow-400 fas fa-star pr-2" />
                  The best and fastest Nomad platform in the world
                </li>
                <li className="text-center">
                  <i className="text-yellow-400 fas fa-star pr-2" />
                  The best and fastest Nomad platform in the world
                </li>
              </ul>
              <div className="flex justify-center py-20">
                <Link
                  to="/#"
                  className="border-5 bg-white hover:bg-purple-600 transiction duration-300 ease-in-out
                   hover:text-gray-100 px-14 py-2 animate-bounce"
                >
                  Book With Us.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;

import React from 'react';
import video from '../Components/tradingvideo.mp4';

const Marketing = () => {
  return (
    <div className="my-auto">
      <div className="pt-32 min-h-screen text-center space-y-5">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          Where the world does markets
        </h1>
        <p className="text-xl sm:text-2xl">
          Join 90 million traders and investors taking the future into their own hands.
        </p>
        <div className="flex flex-wrap justify-center items-center space-x-5 pt-7">
          {['Chart', 'Trade', 'Screen', 'Analyze', 'Learn', 'Chat'].map((item, idx) => (
            <a
              key={idx}
              href="/"
              className="rounded-md px-5 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white mb-3 sm:mb-0"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center pt-10">
          <video
            className="overflow-clip w-full sm:w-4/5 shadow-2xl p-8 sm:p-16 shadow-purple-700 border-r-cyan-500 border-t-purple-500 border-l-pink-500 border-b-blue-500 border-4 rounded-3xl"
            src={video}
            controls
          ></video>
        </div>
        <div>
          <button className="text-white text-lg sm:text-xl font-semibold border-2 border-zinc-800 my-10 py-4 sm:py-7 px-8 sm:px-10 hover:bg-zinc-800 rounded-full">
            Explore features
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketing;

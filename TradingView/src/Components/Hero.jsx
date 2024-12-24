import React from 'react';
import logo from '../Components/alex.webp';
import { IoIosPlayCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
      }}
      className="relative"
    >
      <div className="flex flex-col justify-start items-start py-24 px-8 sm:px-24 md:px-32 lg:px-40 space-y-9 w-full h-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Look first/<br />Then leap.
        </h1>
        <p className="text-white text-xl sm:text-2xl">
          The best trades require research, then commitment.
        </p>
        <div>
          <input
            type="text"
            placeholder="  Search markets here"
            className="placeholder:text-gray-600 text-xl w-full sm:w-96 h-16 rounded-full px-4"
          />
        </div>
        <div className="space-x-4 sm:space-x-8 mt-6">
          {['BTCUSB', 'TSLA', 'AAPL'].map((item, idx) => (
            <button
              key={idx}
              className="text-white font-semibold bg-[#363a4571] py-2 px-6 sm:px-10 hover:bg-zinc-900 rounded-full"
            >
              {item}<br />
              <span className="font-light text-sm">99,583 USD</span>
            </button>
          ))}
        </div>
      </div>

     
      <div className="flex justify-end items-end absolute bottom-0 right-0 mr-10 mb-14">
        <button className="text-white font-semibold flex items-center text-sm bg-[#363a4571] py-2 px-6 sm:px-10 hover:bg-zinc-900 rounded-full">
          <IoIosPlayCircle className="h-5 w-5" /> Watch explainer
        </button>
      </div>

      
      <div className="flex justify-center items-center absolute bottom-0 right-0 mr-14 mb-4">
        <button className="text-slate-300 hover:text-white flex items-center text-sm">
          Leo Houlding, explorer
          <IoIosArrowDown color="white" />
        </button>
      </div>

     
      <div className="absolute bottom-0 right-0 mr-[100vh] mb-18 animate-bounce">
        <MdOutlineKeyboardArrowDown className="text-white text-4xl sm:text-5xl" />
      </div>
    </div>
  );
};

export default Hero;

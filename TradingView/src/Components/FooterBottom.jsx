import React from 'react';
import appStore from '../assets/appStore.svg'; 
import googlePlay from '../assets/googlePlay.svg'; 
import desktopApp from '../assets/desktopApp.svg'; 
import tradingView from '../assets/tradingView.svg';

const FooterBottom = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="flex flex-col lg:flex-row justify-between items-center px-5 max-w-7xl mx-auto">
        {/* Buttons Section */}
        <div className="flex w-[80%] flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 p-2 flex items-center rounded-md"
          >
            <img src={appStore} alt="App Store" className="h-5 mr-2 " />
            <p className='text-xs'>Download on the <br /> <span className='text-base font-semibold'>App Store</span></p>
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 p-2 flex items-center rounded-md"
          >
            <img src={googlePlay} alt="Google Play" className="h-5 mr-2" />
            <p className='text-xs'>Download on the <br /> <span className='text-base font-semibold'>Play Store</span></p>
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 p-2 flex items-center rounded-md"
          >
            <img src={desktopApp} alt="Desktop App" className="h-5 mr-2" />
            <p className='text-xs'>Download on the <br /> <span className='text-base font-semibold'>Desktop App</span></p>
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-gray-700 p-2 flex items-center rounded-md"
          >
            <img src={tradingView} alt="TradingView" className="h-5 mr-2" />
            <p className='text-xs'>Trade on <br /> <span className='text-base font-semibold'>TradingView</span></p>
          </a>
        </div>

        {/* Footer Text Section */}
        <div className="text-sm text-center lg:text-right mt-4 lg:mt-0">
          <p>
            Select market data provided by{' '}
            <a href="#" className="text-blue-500 hover:underline">
              ICE Data Services
            </a>
          </p>
          <p>
            Select reference data provided by FactSet. Copyright © 2024 FactSet
            Research Systems Inc.
          </p>
          <p>© 2024 TradingView, Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

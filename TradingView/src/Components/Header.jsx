import React, { useState } from 'react';
import logo from '../Components/white-short-logo.png';
import { GrLanguage } from 'react-icons/gr';
import { FaCircleUser } from 'react-icons/fa6';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-transparent fixed top-0 left-0 w-full shadow-md z-10 bg-gradient-to-b from-black p-2">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-10 w-auto" src={logo} alt="Logo" />
            </div>
            <div>
              
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {['Products', 'Community', 'Markets', 'News', 'Brokers', 'More'].map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="rounded-3xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>


          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full flex items-center hover:bg-gray-800 p-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <GrLanguage className="h-6 w-6" color="white" />
              <span className="px-2 text-white">EN</span>
            </button>

            <button
              type="button"
              className="flex items-center text-base font-normal text-white hover:bg-gray-800 p-3 px-4 rounded-full"
            >
              <FaCircleUser className="h-6 w-6" />
            </button>

            <button className="hidden sm:block text-white p-2 px-6 w-32 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-black text-white py-2">
          <div className="space-y-1 px-2">
            {['Products', 'Community', 'Markets', 'News', 'Brokers', 'More'].map((item) => (
              <a
                key={item}
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

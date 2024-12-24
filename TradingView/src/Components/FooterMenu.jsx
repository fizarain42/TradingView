import React from 'react';
import logo from '../Components/white-short-logo.png';
import {
  FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaTelegram,
  FaTiktok, FaReddit, FaDiscord, FaLinkedin
} from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

const FooterMenu = () => {
  return (
    <div className='bg-black text-white px-5 py-8 flex flex-col md:flex-row gap-8'>
      {/* Logo and Social Section */}
      <div className='flex flex-col gap-4 md:w-1/5'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt="Logo" className='h-10 w-auto' />
          <h1 className='font-bold text-2xl'>TradingView</h1>
        </div>
        <h3 className='font-medium'>Look first / Then Leap.</h3>
        <div className='flex flex-wrap gap-3'>
          {[FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaTelegram, FaTiktok, FaReddit, FaDiscord, FaLinkedin].map((Icon, index) => (
            <button key={index} className='p-3 rounded-xl hover:bg-gray-600'>
              <Icon className='text-xl' />
            </button>
          ))}
        </div>
        <div>
          <button className='flex items-center gap-2 hover:bg-gray-600 p-2 rounded-xl'>
            <GrLanguage className='text-lg' />
            <span>English</span>
            <IoIosArrowDown className='text-lg' />
          </button>
        </div>
      </div>

      {/* Menu Sections */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full'>
        {/* Products Section */}
        <div>
          <h3 className='font-bold'>Products</h3>
          {[
            'Supercharts', 'Pine Script', 'Stock Screener', 'ETF Screener', 'Bond Screener',
            'Forex Screener', 'Crypto Coins Screener', 'Crypto Pairs Screener', 'DEX Pairs Screener',
            'Stock Heatmap', 'ETF Heatmap', 'Crypto Heatmap', 'Economic Calendar', 'Earnings Calendar',
            'Sparks', 'News', 'TradingView Desktop', 'Mobile app', 'CME Group futures',
            'Eurex futures', 'US stocks bundle'
          ].map((item, index) => (
            <button key={index} className='hover:bg-gray-500 p-2 rounded'>
              {item}
            </button>
          ))}
        </div>

        {/* Company Section */}
        <div>
          <h3 className='font-bold'>Company</h3>
          {[
            'About', 'Features', 'Pricing', 'Social network', 'Wall of Love', 'Athletes', 'Manifesto',
            'Careers', 'Blog', 'Security vulnerability', 'Status page', 'Terms of use', 'Disclaimer',
            'Privacy policy', 'Cookies policy', 'Media kit', 'Accessibility statement',
            'Tarot cards for traders'
          ].map((item, index) => (
            <button key={index} className='hover:bg-gray-500 p-2 rounded'>
              {item}
            </button>
          ))}
        </div>

        {/* Community Section */}
        <div>
          <h3 className='font-bold'>Community</h3>
          {[
            'Refer a friend', 'Ideas', 'Scripts', 'House rules', 'Moderators', 'Pine Script™ Wizards',
            'Chat', 'Your festive recap'
          ].map((item, index) => (
            <button key={index} className='hover:bg-gray-500 p-2 rounded'>
              {item}
            </button>
          ))}
        </div>

        {/* For Business Section */}
        <div>
          <h3 className='font-bold'>For Business</h3>
          {[
            'Widgets', 'Advertising', 'Charting libraries', 'Lightweight Charts™', 'Advanced Charts',
            'Trading Platform', 'Brokerage integration', 'Partner program', 'Education program'
          ].map((item, index) => (
            <button key={index} className='hover:bg-gray-500 p-2 rounded'>
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;

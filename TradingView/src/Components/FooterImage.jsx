import React from 'react';
import img from '../assets/footerimage.jpg';

const FooterImage = () => {
  return (
    <div className='p-4 md:p-10'>
      <div
        className='footerImg flex md:items-center justify-start md:justify-center text-start md:text-left rounded-2xl'
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '80vh',
          width: '100%',
        }}
      >
        <div className='px-4 md:px-10 py-10 md:py-20'>
          <h1 className='text-3xl md:text-4xl font-medium text-white'>Whatever the trade</h1>
          <h1 className='text-5xl md:text-8xl font-bold text-white mt-4'>
            Look first / <br />
            Then leap.
          </h1>
          <div className='py-4'>
            <button className='bg-white text-black px-6 py-3 rounded-full text-lg md:text-xl font-medium'>
              Here's why
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterImage;

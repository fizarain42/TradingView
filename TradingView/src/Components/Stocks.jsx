import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import post1 from '../assets/post1.webp';
import post2 from '../assets/post2.webp';
import post3 from '../assets/post3.webp';
import post4 from '../assets/post4.webp';
import { BiMessageAltDetail } from "react-icons/bi";
import { SlRocket } from "react-icons/sl";

const Stocks = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const images = [
    { src: post1, user: 'byrisham', alt: 'Will Santa Bring Bitcoin? Tracking Crypto Trends Each December', p: "🚨 Get Ready for a MASSIVE Week Ahead! 🚨 Don't miss out on preparing for the upcoming week and the year-end Santa Claus Rally! Make sure to watch this entire video to stay ahead of the game. 📊 In this video,.." },
    { src: post2, user: 'byrisham', alt: 'Tesla is overhyped and over-extended', p: "🚨 Get Ready for a MASSIVE Week Ahead! 🚨 Don't miss out on preparing for the upcoming week and the year-end Santa Claus Rally! Make sure to watch this entire video to stay ahead of the game. 📊 In this video,.." },
    { src: post3, user: 'byrisham', alt: 'JPMorgan: Not the Star of Bethlehem', p: "🚨 Get Ready for a MASSIVE Week Ahead! 🚨 Don't miss out on preparing for the upcoming week and the year-end Santa Claus Rally! Make sure to watch this entire video to stay ahead of the game. 📊 In this video,.." },
    { src: post4, user: 'byrisham', alt: 'Get Ready for a MASSIVE Week Ahead! Watch now!', p: "🚨 Get Ready for a MASSIVE Week Ahead! 🚨 Don't miss out on preparing for the upcoming week and the year-end Santa Claus Rally! Make sure to watch this entire video to stay ahead of the game. 📊 In this video,.." }
  ];

  return (
    <div className='bg-white p-5'>
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl font-bold py-2'>US Stocks</h1>
        <button className='text-xl md:text-2xl font-bold py-2'>Trade Ideas</button>
      </div>
      <Carousel responsive={responsive} className='py-5'>
                      {images.map((image, index) => (
                          <div key={index} className='w-full md:w-[500px] mx-auto rounded-xl overflow-hidden'>
                              <img src={image.src} alt={image.alt} className="w-full h-[300px] object-cover rounded-2xl" />
                              <div className='p-4'>
                                  <h1 className="text-xl font-semibold text-black">{image.alt}</h1>
                                  <p className="text-base text-gray-700">{image.p}</p>
                                  <div className='flex items-center justify-between pt-4'>
                                      <p className="text-sm font-medium text-gray-500">{image.user}</p>
                                      <div className="flex space-x-4">
                                          <button className='p-2 hover:bg-gray-200 rounded-full'>
                                              <BiMessageAltDetail className='text-xl text-gray-600' />
                                          </button>
                                          <button className='p-2 hover:bg-gray-200 rounded-full'>
                                              <SlRocket className='text-xl text-gray-600' />
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </Carousel>
    </div>
  );
};

export default Stocks;

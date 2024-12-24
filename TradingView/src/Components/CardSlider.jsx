import React from 'react';
import img1 from '../Components/img1.jpg';
import img2 from '../Components/img2.jpg';
import img3 from '../Components/img3.jpg';
import img4 from '../Components/img4.jpg';
import img5 from '../Components/img5.jpg';
import img6 from '../Components/img6.jpg';
import img7 from '../Components/img7.jpg';
import img8 from '../Components/img8.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1
    }
  };

  const images = [
    { src: img1, alt: '@jasonzick' },
    { src: img2, alt: '@marlabaers' },
    { src: img3, alt: '@zanchin' },
    { src: img4, alt: '@eddiebrock' },
    { src: img5, alt: '@robinson' },
    { src: img6, alt: '@ethanhunt' },
    { src: img7, alt: '@morgan' },
    { src: img8, alt: '@tabitha' },
    { src: img1, alt: '@jasonzick' },
    { src: img2, alt: '@marlabaers' },
    { src: img3, alt: '@zanchin' },
    { src: img4, alt: '@eddiebrock' },
    { src: img5, alt: '@robinson' },
    { src: img6, alt: '@ethanhunt' },
    { src: img7, alt: '@morgan' },
    { src: img8, alt: '@tabitha' }
  ];

  return (
    <div className="mx-10 py-10 pb-18">
      <Carousel responsive={responsive}>
        {images.map((image, index) => (
          <div key={index} className='hover:bg-slate-600 w-[280px] rounded-xl'>
            <img src={image.src} alt={image.alt} className="w-[270px] pl-[10px] pt-[10px] rounded-2xl h-[300px]" />
            <h1 className="text-gray-400 py-2 pl-2">{image.alt}</h1>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSlider;

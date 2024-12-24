import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PostStories = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const cards = [
    {
      title: "TSLA",
      desc: "Tesla Stock Wipes Out",
      USD: "4.90 USD"
    },
    {
      title: "BNDSY",
      desc: "Banco de shabadell",
      USD: "2.32 USD"
    },
    {
      title: "DIDAF",
      desc: "Distribuidora Internacional de Alimentacion",
      USD: "0.90 USD"
    },
    {
      title: "FER",
      desc: "Ferrovia",
      USD: "4,90 USD"
    },
    {
      title: "BKINY",
      desc: "Bank of New York Mellon",
      USD: "2.32 USD"
    }
  ];

  return (
    <div className='bg-white'>
        <div>
            <button className='px-5 text-3xl text-black font-semibold'>Community Trends</button></div>
      <Carousel responsive={responsive}>
        {cards.map((card, index) => (
          <div key={index} className='px-7 py-4 justify-start items-center w-[100%]'>
            <button>
              <h1 className='text-black font-medium py-2'>{card.title}</h1>
              <p className='text-gray-800'>{card.desc} - {card.USD}</p>
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default PostStories;
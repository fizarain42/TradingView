import React from 'react'
import img from '../assets/download.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const MarketSummary = () => {
    const stats = [
        { name: "Japan 225", value: "39,161.12", change: "+1.19%", currency: "JPY", flag: "\ud83c\uddef\ud83c\uddf5" },
        { name: "FTSE 100", value: "8,102.72", change: "+0.22%", currency: "GBP", flag: "\ud83c\uddec\ud83c\udde7" },
        { name: "DAX", value: "19,848.77", change: "-0.18%", currency: "EUR", flag: "\ud83c\udde9\ud83c\uddea" },
        { name: "Nasdaq 100", value: "15,872.32", change: "+0.35%", currency: "USD", flag: "\ud83c\uddfa\ud83c\uddf8" },
        { name: "CAC 40", value: "7,236.14", change: "-0.12%", currency: "EUR", flag: "\ud83c\uddeb\ud83c\uddf7" },
    ];

    return (
        <div className='bg-white py-5'>
            <div >
                <button className='px-5 text-3xl text-black font-semibold'>Market summary</button>
            </div>
            <div>
                <div className="flex flex-wrap  items-start px-5 pt-7">
                    {['Indices', 'Stock', 'ETFs', 'Crypto', 'Forex', 'Future', 'Bond'].map((item, idx) => (
                        <a
                            key={idx}
                            href="/"
                            className="rounded-md px-4 py-2 text-base font-medium hover:bg-gray-300 text-black active:text-bold  mb-3 sm:mb-0"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
            <div>

                <Carousel responsive={responsive}>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between bg-white p-4 rounded-md shadow-md w-64"
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-xl">{stat.flag}</span>
                                <div>
                                    <h3 className="font-medium text-gray-800">{stat.name}</h3>
                                    <p className="text-gray-500 text-sm">{stat.value} {stat.currency}</p>
                                </div>
                            </div>
                            <p
                                className={`text-sm font-semibold ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"
                                    }`}
                            >
                                {stat.change}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div><img src={img} alt="" /></div>
        </div>
    )
}

export default MarketSummary
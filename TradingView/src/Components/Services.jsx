import React from 'react';
import logo from '../Components/circke.svg';
import logo2 from '../Components/star.svg';
import logo3 from '../Components/triangle.svg';
import logo4 from '../Components/square.svg';

const Services = () => {
    return (
        <div>
            <div>
                <h1 className="py-5 text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center font-bold">
                    Love in every<br />#TradingView
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10 px-5">
                <div className="flex flex-row items-center space-x-4">
                    <div className="text-start">
                        <h1 className="text-4xl sm:text-5xl font-bold pb-2">90M+</h1>
                        <p className="text-lg">Traders and investors use our platform.</p>
                    </div>
                    <img src={logo} className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <div className="text-start">
                        <h1 className="text-4xl sm:text-5xl font-bold pb-2">#1</h1>
                        <p className="text-lg">Top website in the world when it comes to all things investing.</p>
                    </div>
                    <img src={logo4} className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <div className="text-start">
                        <h1 className="text-4xl sm:text-5xl font-bold pb-2">1.5M+</h1>
                        <p className="text-lg">Mobile reviews with 4.9 average rating. No other fintech apps are more loved.</p>
                    </div>
                    <img src={logo2} className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <div className="text-start">
                        <h1 className="text-4xl sm:text-5xl font-bold pb-2">10M+</h1>
                        <p className="text-lg">Custom scripts and ideas shared by our users.</p>
                    </div>
                    <img src={logo3} className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
            </div>
        </div>
    );
}

export default Services;

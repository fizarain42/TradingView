import React from 'react';

const HighestVolumeStocks = () => {
    const stocks = [
        { title: 'Tesla, Inc.', USD: '4.21 USD', symbol: 'TSLA', growth: '-3.46' },
        { title: 'Nvidia Corp', USD: '3.32 USD', symbol: 'NVDA', growth: '+3.06' },
        { title: 'Apple Inc.', USD: '5.32 USD', symbol: 'AAPL', growth: '1.88' },
        { title: 'Broadcom Inc.', USD: '2.52 USD', symbol: 'AVGA', growth: '1.13' },
        { title: 'Meta', USD: '8.43 USD', symbol: 'META', growth: '-1.73' },
        { title: 'Microsoft', USD: '9.32 USD', symbol: 'MSFT', growth: '-0.10' },
    ];

    return (
        <div className="bg-white py-7">
            <h1 className="px-5 text-3xl text-black font-semibold">Highest Volume Stocks</h1>
            <div className="flex flex-wrap justify-start">
                {stocks.map((stock, index) => (
                    <div key={index} className="px-4 py-4 items-center w-[33%]">
                        <div>
                            <h2 className="text-black font-medium py-2 flex items-center">
                                {stock.title}:
                                <span className="ml-auto px-5 text-black">{stock.USD}</span>
                            </h2>
                            <div>
                                <p className="text-black text-sm w-[50px] h-[30px] rounded hover:text-white hover:bg-cyan-600 font-medium flex items-center">
                                    {stock.symbol}</p>
                                <span
                                    className="ml-auto"
                                    style={{ color: parseFloat(stock.growth) >= 0 ? 'green' : 'red' }}
                                >
                                    {stock.growth}%
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighestVolumeStocks;

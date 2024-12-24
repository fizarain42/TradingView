import React from "react";

const newsItems = [
  {
    id: 1,
    time: "10 hours ago",
    source: "TradingView",
    title: "BTC/USD: Bitcoin Wobbles Under Six Digits After Crawling Out of $92,000 Weekend Dip",
    image: "btc-image-url", 
  },
  {
    id: 2,
    time: "10 hours ago",
    source: "TradingView",
    title: "EUR/USD: Euro Seeks Higher Grounds After Fed-Fueled Dollar Rally Eases Grip on Forex",
    image: "eur-image-url", 
  },
  {
    id: 3,
    time: "10 hours ago",
    source: "TradingView",
    title: "SPX: S&P 500 Futures Rise Ahead of Festive Week. Broad Index Boasts 25% Annual Gains",
    image: "spx-image-url", 
  },
  {
    id: 4,
    time: "2 days ago",
    source: "TradingView",
    title: "TSLA: Tesla Stock Wipes Out 13% as Fed's Powell Spoils Weekslong Post-Election Rally",
    image: "tsla-image-url",
  },
  {
    id: 5,
    time: "2 days ago",
    source: "Dow Jones Newswires",
    title: "Rumble Gets $775 Million Investment From Crypto Firm Tether",
    image: "rumble-image-url", 
  },
  {
    id: 6,
    time: "2 days ago",
    source: "Dow Jones Newswires",
    title: "IG Metall, Volkswagen Agreement Averts Site Closures, Forced Redundancies",
    image: "vw-image-url",
  },
  {
    id: 7,
    time: "3 days ago",
    source: "Dow Jones Newswires",
    title: "Synopsys' Bid for Ansys Faces In-Depth U.K. Probe Unless Remedies Quell Antitrust Concerns",
    image: "synopsys-image-url", 
  },
  {
    id: 8,
    time: "3 days ago",
    source: "TradingView",
    title: "NKE: Nike Stock Wipes Out 9% Post-Earnings Pop After New CEO Fans Profit Concerns",
    image: "nike-image-url", 
  },
];

const PostStories = () => {
  return (
    <div className="bg-white">
        <div className="px-16"><h1 className="text-3xl font-semibold bg-white text-black">Top stories</h1></div>
    <div className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">

      {newsItems.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg shadow-md bg-white overflow-hidden flex flex-col justify-between"
        >
          
          <div className="p-4">
            <p className="text-xs text-gray-500 mb-1">{item.time} • {item.source}</p>
            <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PostStories;

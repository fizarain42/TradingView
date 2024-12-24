import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Marketing from './Components/Marketing'
import Services from './Components/Services'
import CardSlider from './Components/CardSlider'
import MarketSummary from './Components/MarketSummary'
import PostCarousel from './Components/PostCarousel'
import PostStories from './Components/PostStories'
import Stocks from './Components/Stocks'
import CommunityTrends from './Components/CommunityTrends'
import HighestVolumeStocks from './Components/HighestVolumeStocks'
import FooterImage from './Components/FooterImage'
import FooterMenu from './Components/FooterMenu'
import FooterBottom from './Components/FooterBottom'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Marketing />
      <Services />
      <CardSlider />
      <MarketSummary />
      <PostCarousel />
      <PostStories />
      <Stocks />
      <CommunityTrends />
      <HighestVolumeStocks />
      <Marketing />
      <Services />
      <CardSlider />
      <FooterImage />
      <FooterMenu />
      <FooterBottom />
    </div>
  )
}

export default App

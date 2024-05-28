import React from 'react'
import Header from '../components/header/Header'
import CarouselHero from '../components/Carousel/CarouselHero'
import '../components/Carousel/CarouselHeroStyle.css'
import HomePageSection1 from '../components/HomePageSection/HomePageSection1'
import HomePageService from '../components/HomePageSection/HomePageService'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className="carousel-container"> 
        <CarouselHero />
      </div>
      <HomePageSection1 />
      <HomePageService />

      <Footer />
    </>
  )
}

export default Home

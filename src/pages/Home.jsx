import React from 'react'
import Header from '../components/header/Header'
import CarouselHero from '../components/Carousel/CarouselHero'
import '../components/Carousel/CarouselHeroStyle.css'

function Home() {
  return (
    <>
      <Header />
      <div className="carousel-container"> 
        <CarouselHero />
      </div>
      
    </>
  )
}

export default Home

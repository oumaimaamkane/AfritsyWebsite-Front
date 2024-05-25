import React from 'react'
import Header from '../components/header/Header'
import CarouselHero from '../components/Carousel/CarouselHero'
import '../components/Carousel/CarouselHeroStyle.css'

function Home() {
  return (
    <>
      <Header />
      <div style={{ margin: '110px' }}> 
        <CarouselHero />
      </div>
    </>
  )
}

export default Home

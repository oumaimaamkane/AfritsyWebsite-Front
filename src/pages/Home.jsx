import React from 'react'
import Header from '../components/header/Header'
import CarouselHero from '../components/Carousel/CarouselHero'
import '../components/Carousel/CarouselHeroStyle.css'
import About from '../components/HomePageSection/About'
import Service from '../components/HomePageSection/Service'
import Pays from '../components/HomePageSection/Pays'
import Feature from '../components/HomePageSection/Feature'
import Clients from '../components/HomePageSection/Clients'
import Footer from '../components/Footer'




function Home() {
  return (
    <>
      <Header />
      <div className="carousel-container">
        <CarouselHero />
      </div>
      <About />
      <Service />
      <Pays />
      <Feature />
      <Clients />
      <Footer />
    </>
  )
}

export default Home

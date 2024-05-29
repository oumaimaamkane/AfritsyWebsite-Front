import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import Hero from '../components/AboutPageSections/Hero'
import Benefices from '../components/AboutPageSections/Benefices'

function About() {
  return (
    <>
      <Header/>
        <div className='carousel-container'>
          <Hero />
        </div>
        <Benefices />
      <Footer />
    </>
  )
}

export default About

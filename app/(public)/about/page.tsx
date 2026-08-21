import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BeforeFooter from '../components/BeforeFooter'
import { BeforeFooterData } from '@/data'
import AboutHero from '../components/AboutHero'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
      <Footer />
    </div>
  )
}

export default About

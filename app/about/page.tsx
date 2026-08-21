import React from 'react'
import Navbar from '.././(public)/components/Navbar'
import Footer from '.././(public)/components/Footer'
import BeforeFooter from '../(public)/components/BeforeFooter'
import { BeforeFooterData } from '@/data'
import AboutHero from '../(public)/components/AboutHero'

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

import React from 'react'

import { BeforeFooterData } from '@/data'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BeforeFooter from "../components/BeforeFooter"
import Hero from "../components/Hero"

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
      <Footer />
    </div>
  )
}

export default About

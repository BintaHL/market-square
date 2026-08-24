import React from 'react'
import { BeforeFooterData } from '@/data'
import BeforeFooter from "../components/BeforeFooter"
import AboutHero from "../components/AboutHero"

const About = () => {
  return (
    <div>
      
      <AboutHero />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
      
      
    </div>
  )
}

export default About

import React from 'react'
import { BeforeFooterData } from '@/data'
import BeforeFooter from "../components/BeforeFooter"
import AboutHero from "../components/AboutHero"

const About = () => {
  return (
    <div className='mt-30'>  
      <AboutHero />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>  
    </div>
  )
}

export default About

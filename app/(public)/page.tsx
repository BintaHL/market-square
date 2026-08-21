import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BeforeFooter from './components/BeforeFooter'
import { BeforeFooterData } from '@/data'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
      <Footer />
    </div>
  )
}

export default Home

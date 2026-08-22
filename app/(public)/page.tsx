import React from 'react'
import { BeforeFooterData } from '@/data'
import Navbar from "../(public)/components/Navbar"
import Footer from "../(public)/components/Footer"
import BeforeFooter from "../(public)/components/BeforeFooter"
import Hero from "../(public)/components/Hero"
// import Products from './components/Products'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Products /> */}
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
      <Footer />
    </div>
  )
}

export default Home

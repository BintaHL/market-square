import React from 'react'
import { BeforeFooterData } from '@/data'
import BeforeFooter from "../(public)/components/BeforeFooter"
import Hero from "../(public)/components/Hero"
import Product from "./products/page"
import CustomCarousel from '../global-components/carousel/Carousel'

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />

      <CustomCarousel />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
    </div>
  )
}

export default Home

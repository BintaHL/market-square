import React from 'react'
import { BeforeFooterData } from '@/data'
import BeforeFooter from "../(public)/components/BeforeFooter"
import Hero from "../(public)/components/Hero"
import Product from "./products/page"
import CustomCarousel from '../global-components/carousel/Carousel'
import SelectedCategory from './products/components/selectedCategory'
import OurProduct from './products/vendoraProducts/page'

const Home = () => {
  return (
    <div>
      {/* Changed here to h-screen REMOVE COMMENT TO*/}
      <Hero />   
      <Product />
      <CustomCarousel />
      <SelectedCategory />
      <OurProduct />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
    </div>
  )
}

export default Home

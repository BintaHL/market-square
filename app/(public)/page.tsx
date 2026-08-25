import React from 'react'
import { BeforeFooterData } from '@/data'
import BeforeFooter from "../(public)/components/BeforeFooter"
import Hero from "../(public)/components/Hero"
import Product from "./products/page"

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
    </div>
  )
}

export default Home

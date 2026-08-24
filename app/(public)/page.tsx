import React from 'react'
import { BeforeFooterData } from '@/data'
import BeforeFooter from "../(public)/components/BeforeFooter"
import Hero from "../(public)/components/Hero"

const Home = () => {
  return (
    <div>
      <Hero />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
    </div>
  )
}

export default Home

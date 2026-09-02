
import { BeforeFooterData } from '@/data'
import BeforeFooter from "../(public)/components/BeforeFooter"
import Hero from "../(public)/components/Hero"
import Product from "./products/page"
import CustomCarousel from '../global-components/carousel/Carousel'
import OurProduct from './products/vendoraProducts/page'
import CategoryBanner from "./products/components/CategoryBanner"

const Home = () => {
  return (
    <div>
      {/* Changed here to h-screen REMOVE COMMENT TO*/}
      <Hero />   
      <Product />
      <CustomCarousel />
      <CategoryBanner />
      <OurProduct />
      <BeforeFooter BeforeFooterData={BeforeFooterData}/>
    </div>
  )
}

export default Home

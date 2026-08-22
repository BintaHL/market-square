
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/app/global-components/cardsLayout/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import ProductCardProps from '../../global-components/cardsLayout/ProductCard'

export interface Product {
  id:number;
  image: string;
  name: string;
  price: string;
  reviews?: string;
  badge?: string;
  badgeColor?: string;
  imageAlt?: string;
  rating?: {
    rate:number;
    count:number;
  }
}

async function ProductItems(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch store products:', error);
    return [];
  }
}

async function Products() {
  const products = await ProductItems();

  return (
    <div className=''>
        <Navbar />
        <div className='container mx-auto mt-20'>
            <div className='text-center mb-10'>
            <h1>All Products</h1>
        </div>
        <div className='flex flex-wrap gap-4'>
            {products?.map((product) => (
            <ProductCard 
                id={product.id} 
                key={product.id} 
                image={product.image} 
                name={product.name} 
                price={product.price}
                reviews={product.rating?.rate || 0 } 
                rating={product.rating}  
                imageAlt={product.name}/>
        ))}
        </div>
        </div>
        <Footer />
    </div>
  );
}

export default Products;

// import React from 'react'
// import axios from 'axios';
// import Link from 'next/link';
// import Image from 'next/image';

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }

// async function ProductItems (): Promise<Product[]> {
//   try {
   
//     const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
    
//     const data = response.data; 
    
//     return data; 
//   } catch (error) {
//     console.error('Failed to fetch store products:', error);
//     return [];
//   }
// }

// async function Products(){
//   const categorys = await ProductItems()
//   return (
//     <div className='min-h-screen'>
//       <div className='min-h-screen p-5'>
//           <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
//           {categorys.map((item, id) => {
//               return (
//                   <li key={id} className='border-r-2 border-r-[#dfd9d4] p-4'>
//                       <strong className='text-lg text-mist-700'>{item.category}</strong><br/>
//                       <Image src={item?.image} alt={item.title} width={50} height={50} style = {{objectFit:"contain"}}/>
//                       <strong className='text-sm text-mist-600 leading-none wrap-break-word'>{item.title.split(" ").slice(0, 6)}</strong><br/>
//                       <span className='text-sm mt-2 mb-2'>{item.description.split(" ").slice(0, 6).join(" ")}... </span><br/>
//                       <Link href={`/dashboard/products/${item.id}`} className='mt-5 bg-orange-500 text-white p-1 rounded-lg'
//                           >View details</Link>
//                   </li>
//               )
//           })}
//           </ul>
//       </div>
//     </div>
//   )
// }

// export default Products

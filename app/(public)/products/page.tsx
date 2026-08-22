
// import React from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ProductCard } from '@/app/global-components/cardsLayout/ProductCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// // import ProductCardProps from '../../global-components/cardsLayout/ProductCard'

// export interface Product {
//   id:number;
//   image: string;
//   name: string;
//   price: string;
//   reviews?: string;
//   badge?: string;
//   badgeColor?: string;
//   imageAlt?: string;
//   rating?: {
//     rate:number;
//     count:number;
//   }
// }

// async function ProductItems(): Promise<Product[]> {
//   try {
//     const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch store products:', error);
//     return [];
//   }
// }

// async function Products() {
//   const products = await ProductItems();

//   return (
//     <div className=''>
//         <Navbar />
//         <div className='container mx-auto mt-20'>
//             <div className='text-center mb-10'>
//             <h1>All Products</h1>
//         </div>
//         <div className='flex flex-wrap gap-4'>
//             {products?.map((product) => (
//             <ProductCard 
//                 // id={product.id} 
//                 key={product.id} 
//                 image={product.image} 
//                 name={product.name} 
//                 price={product.price}
//                 reviews={product.rating?.rate || 0 } 
//                 rating={product.rating}  
//                 imageAlt={product.name}/>
//         ))}
//         </div>
//         </div>
//         <Footer />
//     </div>
//   );
// }

// export default Products;


import React from 'react'

const Products = () => {
  return (
    <div>
      <p>products</p>
    </div>
  )
}

export default Products

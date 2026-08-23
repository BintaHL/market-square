"use client"
import { useEffect, useState } from "react";
import { ProductCard } from "@/app/global-components/cardsLayout/ProductCard"; 
import { getProducts } from "@/app/services/productService"; 
import type { Product } from "@/app/global-components/types/product"; 

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-30">

    <div className="w-[80%] mx-auto">

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.slice(0,8).map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
    </div>
    </div>
  );
}





// import React from 'react';
// import axios from 'axios';
// import { ProductCard } from '@/app/global-components/cardsLayout/ProductCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// // import ProductCardProps from '../../global-components/cardsLayout/ProductCard'

// export interface Product {
//     id:number;
//   image?: string;
//   name: string;
//   price: string;
//   reviews?: string;
//   badge?: string;
//   badgeColor?: string;
//   imageAlt?: string;
//   rating?: number;
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
//                 key={product.id} 
//                 image={product.image} 
//                 name={product.name} 
//                 price={product.price}
//                 reviews={product.reviews} 
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


// // import React from 'react'

// // const Products = () => {
// //   return (
// //     <div>
// //       <p>products</p>
// //     </div>
// //   )
// // }

// // export default Products

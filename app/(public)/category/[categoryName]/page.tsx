// import Link from "next/link";

// interface Rating {
//   rate: number;
//   count: number;
// }

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: Rating;
// }

// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

// async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  
//   const res = await fetch(`https://fakestoreapi.com/products`, {
//     next: { revalidate: 3600 }
//   });

//   if (!res.ok) return [];
  
//   return res.json();
// }

// // 3. Page Component
// export default async function CategoryPage({ params }: PageProps) {
//   const { slug } = await params;
//   const products = await getProductsByCategory(slug);

//   // If the category does not exist or has no items, show a 404 page
//   // if (products.length === 0) {
//   //   notFound();
//   // }

//   return (
//     <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto mt-10">
        
//         {/* Dynamic Header */}
//         <h1 className="text-3xl font-extrabold text-gray-900 capitalize mb-8 border-b border-gray-200 pb-4">
//           {decodeURIComponent(slug)}
//         </h1>
//         <p>Items from each Category</p>
//         {/* Tailwind Grid Layout for Products */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div 
//               key={product.id} 
//               className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100 flex flex-col justify-between"
//             >
//               {/* Product Image container */}
//               <div className="p-6 bg-white h-64 flex items-center justify-center overflow-hidden border-b border-gray-50">
//                 <img 
//                   src={product.image} 
//                   alt={product.title} 
//                   className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="p-5 flex-1 flex flex-col justify-between">
//                 <div>
//                   <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
//                     {product.title}
//                   </h2>
                  
//                   {/* Rating Badge */}
//                   <div className="flex items-center gap-1 mt-2 text-amber-500 text-xs font-medium">
//                     ⭐ {product.rating?.rate} <span className="text-gray-400">({product.rating?.count})</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between mt-5">
//                   <span className="text-lg font-bold text-gray-950">
//                     ${product.price.toFixed(2)}
//                   </span>
//                   <button className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors">
//                     <Link href='/cart'>Add to Cart</Link>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }
// The Second part of the category page
// 'use server'
// import Image from 'next/image';
// import React from 'react'

// interface Product {
//   id:number;
//   title:string;
//   price:number;
//   description:string;
//   category:string;
//   images?:string;
// }

// async function getProducts(): Promise<Product[]> {
//   const res = await fetch("https://api.escuelajs.co/api/v1/products");
//   const data = await res.json();

//   return data;
// }

// async function Category() {
//   const products = await getProducts();
//   const rawImage = products.images?.[0];
//   const imageUrl = rawImage
//   ? rawImage.startsWith("http")
//   ? rawImage
//   : `https://i.imgur.com/${products.images[0]}`
//   :null
//   return (
//     <div className='pt-50'>
//       <p>Items in each category</p>
//       {products.map((product) =>(
//         <div key={product.id}>
//           <p>{product.title} - {product.price}</p>
//           {/* <Image src={product.image || null} alt={product.title} width={300} height={300}/> */}
//           <Image src={imageUrl} alt={product.title} width={300} height={300} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Category

'use client'
// import { Input } from '@/components/ui/input'
// import React from 'react'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// List category
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

export default function FilterLayout() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        // const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  const currentSearch = searchParams.get('q') || '';
  const currentCategory = searchParams.get('category') || 'All';

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(currentSearch.toLowerCase());
    
    const matchesCategory = 
      currentCategory === 'All' || 
      product.category.toLowerCase() === currentCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value && value !== 'All') {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  };

  const categories = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes', 'Miscellaneous'];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-50 rounded-xl shadow-md space-y-6 mt-50">
      <h1 className="text-2xl font-bold text-slate-800">Categories</h1>
      
      <div className="space-y-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={currentSearch}
          onChange={(e) => updateFilters('q', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />

        {/* Category List Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
          {categories.map((cat) => {
            const isActive = currentCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => updateFilters('category', cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Results Area */}
      {isLoading ? (
        <div className="text-center py-8 text-slate-500 font-medium animate-pulse">
          Loading products from API...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-slate-800 line-clamp-1">{product.title}</h3>
                  <p className="text-sm text-slate-500">{product.category}</p>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{product.description}</p>
                </div>
                <div className="mt-4 text-blue-600 font-bold">${product.price}</div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-slate-400">
              No products match your criteria.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
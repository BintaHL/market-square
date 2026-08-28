'use client'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const searchRef = useRef<HTMLDivElement>(null);
    const [showSearch, setShowSearch] = useState(false);
    const mobileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className='relative w-full'>
        <form onSubmit={(e)=>e.preventDefault()} className='relative items-center'>
            <Input placeholder='Search...' className='flex-1 rounded-md py-5 placeholder:font-semibold'
            value={search} onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowResults(true)}/>
            {search ? (
                <X onClick={() => setSearch("")}
                className="w-5 h-5 absolute right-3 top-2.5 cursor-pointer"/>
            ) : (
                <Search className='absolute right-3 top-3 w-5 h-5'/>
            )}
        </form>
    </div>
  )
}

export default Searchbar


// // Navbar search
// "use client"
// import React, { useState } from 'react'
// import { ChevronDown } from 'lucide-react';
// import Link from 'next/link';
// import { Heart } from 'lucide-react';
// import { ShoppingCart } from 'lucide-react';
// import { Search } from 'lucide-react';
// import Searchbar from './Searchbar';
// import ProductsFilter from './ProductsFilter';

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
// async function AllProducts({ params }: PageProps) {
//   const { slug } = await params;
//   const products = await getProductsByCategory(slug);

// // const Searchbar = () => {
//     const [ query, setQuery] = useState("");
//     const filteredItems = products.filter((product) => `${product.title} ${product.description}`.toLowerCase().includes(query.toLowerCase()))
//   return (
//     <div className='fixed w-full left-0 top-0 z-100'>
//         <div className='z-100 shadow-md bg-white'>
//             {/* First part of the nav */}
//             <div className='w-full bg-[#000000] py-3 hidden md:block'>
//                 <div className=''>
//                     <div className='flex  max-w-7xl md:px-4 text-center text-sm justify-end'>
//                         <div className='pr-29'>
//                             <p className='text-white inline-flex items-center justify-center text-xs '>
//                                 Summer Sale For All Swim And Free Express Delivery - OFF 50%
//                                 <span className='ml-2 inline-flex items-center underline font-semibold cursor-pointer'>ShopNow</span>
//                             </p>
//                         </div>
//                         <div className='ml-40 text-sm pr-20'>
//                             <p className='text-white flex items-center gap-2'>English 
//                                 <span className='inline-flex items-center text-xs'><ChevronDown className='text-white' size={15}/></span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* The second part of the nav */}
//             <div className='w-full z-100 hidden md:block'>
//                 <div className='container mx-auto flex md:flex-row items-center py-5 md:py-8 gap-20 justify-between bg-white'>
//                     <div className='font-bold'>
//                         <h3>CARTS</h3>
//                     </div>
//                     <div className='flex md:flex-row justify-between items-center md:gap-40 bg-white gap-4'>
//                         <div className='flex md:flex-row gap-8'>
//                             <Link href="/" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>Home</Link>
//                             <Link href="/contact" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>Contact</Link>
//                             <Link href="/about" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>About</Link>
//                             <Link href="/auth/signin" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px] whitespace-nowrap'>Sign Up</Link>
//                         </div>
//                         <div className='flex md:flex-row gap-4 items-center justify-center'>
//                             <div className="relative flex items-center justify-center">
//                                 {/* Input field with right-side padding reserved */}
//                                 <input
//                                     type="text"
//                                     placeholder="What are you looking for?"
//                                     className="w-full pl-4 pr-15 py-2 bg-gray-100 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
//                                     value={query}
//                                     onChange={(e) => setQuery(e.target.value)}
//                                 />
//                                 {/* search icon */}
//                                 <div className="absolute right-3 flex items-center pointer-events-none">
//                                     <Search className="h-5 w-5 text-black"/>
//                                 </div>
//                             </div>
//                             <div className='flex justify-between gap-5'>
//                                 <Heart size={20}/>
//                                 <ShoppingCart size={20}/>
//                             </div>
//                         </div>
//                         <div className='w-full max-w-6xl mt-6'>
//                             {filteredItems.length > 0 ? (
//                                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
//                                 {filteredItems.map((item) => (
//                                     <div key={item.id} className='p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center text-center'>
//                                         <span>{item.title} : {item.description}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                             ) : (<div>No results found.</div>)}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Mobile navbar */}
//             <div className='block md:hidden'>
//                 <p>Mobile nav</p>
//                 <Searchbar />
//                 <ProductsFilter />
//             </div>
//         </div>
//     </div>       
//   )
// }

// export default Searchbar

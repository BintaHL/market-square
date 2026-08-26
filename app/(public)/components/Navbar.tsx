import React from 'react'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='fixed w-full left-0 top-0'>
        <div className='z-100 h-[140px] shadow-md'>
            {/* First part of the nav */}
            <div className='w-full h-[60px] md:h-[40px] bg-[#000000] py-3'>
                <div className=''>
                    <div className='flex flex-col md:flex-row max-w-7xl md:px-4 text-center text-sm justify-end'>
                        <div className='pr-29'>
                            <p className='text-white inline-flex items-center justify-center text-xs '>
                                Summer Sale For All Swim And Free Express Delivery - OFF 50%
                                <span className='ml-2 inline-flex items-center underline font-semibold cursor-pointer'>ShopNow</span>
                            </p>
                        </div>
                        <div className='ml-40 text-sm pr-20'>
                            <p className='text-white flex items-center gap-2'>English 
                                <span className='inline-flex items-center text-xs'><ChevronDown className='text-white' size={15}/></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* The second part of the nav */}
            <div className='w-full h-[100px] z-100'>
                <div className='container mx-auto flex flex-col md:flex-row items-center py-5 md:py-8 gap-20 justify-between'>
                    <div className='font-bold'>
                        <h3>CARTS</h3>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between md:gap-40 bg-white'>
                        <div className='flex flex-col md:flex-row mx-auto'>
                            <Link href="/" className='mb-5 md:pr-6 hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[18px]'>Home</Link>
                            <Link href="/contact" className='mb-5 md:pr-6 hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[18px]'>Contact</Link>
                            <Link href="/about" className='mb-5 md:pr-6 hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[18px]'>About</Link>
                            <Link href="/auth/signin" className='mb-5 md:pr-6 hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[18px] whitespace-nowrap'>Sign Up</Link>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                            <div className="relative flex items-center justify-center">
                                {/* Input field with right-side padding reserved */}
                                <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full pl-4 pr-15 py-2 bg-gray-100 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
                                />
                                {/* search icon */}
                                <div className="absolute right-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-black" />
                                </div>
                            </div>
                            <div className='flex justify-between gap-10'>
                                <Heart size={20}/>
                                <ShoppingCart size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>       
  )
}

export default Navbar

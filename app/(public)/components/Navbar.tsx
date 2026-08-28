// import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
<<<<<<< HEAD
import Search from '../search/page'
// import { Search } from 'lucide-react';
=======
import { Search } from 'lucide-react';
import { ProfileDropdownCustom } from '../profile/profileDropdown';
>>>>>>> f18495c44dfe387d96056c28e35e9d0341e7f70b
import Searchbar from './Searchbar';
import ProductsFilter from './ProductsFilter';

const Navbar = () => {
    // const [mobileMenu setMobileMenu] = useState(false);
  return (
    <div className='fixed w-full left-0 top-0 z-100'>
        <div className='z-100 shadow-md bg-white'>
            {/* First part of the nav */}
            <div className='w-full bg-[#000000] py-3 hidden md:block'>
                <div className=''>
                    <div className='flex  max-w-7xl md:px-4 text-center text-sm justify-end'>
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
            <div className='w-full z-100 hidden md:block'>
                <div className='container mx-auto flex md:flex-row items-center py-5 md:py-8 gap-20 justify-between bg-white'>
                    <div className='font-bold'>
                        <h3>CARTS</h3>
                    </div>
                    <div className='flex md:flex-row justify-between items-center md:gap-40 bg-white gap-4'>
                        <div className='flex md:flex-row gap-8'>
                            <Link href="/" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>Home</Link>
                            <Link href="/contact" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>Contact</Link>
                            <Link href="/about" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>About</Link>
                            <Link href="/auth/signup" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px] whitespace-nowrap'>Sign Up</Link>
                        </div>
                        <div className='flex md:flex-row gap-4 items-center justify-center'>
                            <div className="relative flex items-center justify-center">
                                <Search />
                                {/* Input field with right-side padding reserved */}
                                {/* <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full pl-4 pr-15 py-2 bg-gray-100 rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
                                /> */}
                                {/* search icon */}
                                {/* <div className="absolute right-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-black" />
                                </div> */}
                            </div>
                            <div className='flex justify-between gap-5'>
                                <Heart size={20}/>
                                <ShoppingCart size={20}/>
                            </div>
                            {/* Profile Icon */}
                            <ProfileDropdownCustom />
                        </div>
                    </div>
                </div>
            </div>
            {/* ************Mobile navbar *************/}
            <div className='block md:hidden'>
                {/* First part of the nav */}
                <div className='bg-[#000000] py-3 block md:hidden'>
                    <div className=''>
                        <div className='flex w-full text-center text-sm justify-end'>
                            <div className='pr-29'>
                                <p className='text-white items-center justify-center text-xs '>
                                    Summer Sale For All Swim And Free Express Delivery - OFF 50%
                                    <span className='ml-2 inline-flex items-center underline font-semibold cursor-pointer hover:text-xl hover:text-emerald-600 transition-all duration-300 decoration-2'>
                                        <Link href='/allproducts'>ShopNow</Link>
                                    </span>
                                </p>
                            </div>
                            <div className='text-sm pr-20'>
                                <p className='text-white flex items-center gap-2'>English 
                                    <span className='inline-flex items-center text-xs'><ChevronDown className='text-white' size={15}/></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The second part of the nav */}
                <div className='w-full z-100 block md:hidden'>
                    <div className='items-center justify-between bg-white px-10 pt-5'>
                        <div className='flex justify-between font-bold'>
                            <h3>CARTS</h3>
                            <button>
                                <X size={24}/>
                            </button>
                        </div>
                        <div className='justify-between items-center bg-amber-700 pt-4'>
                            <div className='flex flex-col items-center justify-center'>
                                <Link href="/" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl'>Home</Link>
                                <Link href="/contact" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl pt-4'>Contact</Link>
                                <Link href="/about" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl pt-4'>About</Link>
                                <Link href="/auth/signin" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl pt-4 whitespace-nowrap'>Sign Up</Link>
                            </div>
                            <div className='items-center justify-center mt-4'>
                                <div className="relative flex items-center justify-center">
                                    <Search />
                                </div>
                                <div className='flex justify-center gap-10 pb-5 pt-5'>
                                    <Heart size={20} className='hover:text-emerald-600'/>
                                    <ShoppingCart size={20} className='hover:text-emerald-600'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {Mobile Menu Button} */}
            {/* {mobileMenu && (
                <div className='md:hidden px-4 pb-4 space-y-2 flex flex-col'>
                    <button>
                        <Menu size={24}/>
                    </button>
                </div>
            )} */}
        </div>
    </div>       
  )
}

export default Navbar

'use client'
import { ChevronDown, Menu, X, XIcon } from 'lucide-react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
// import { Search } from 'lucide-react';
// import { ProfileDropdownCustom } from '../profile/profileDropdown';
import { useState } from 'react';
import Search from './Search';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className='fixed w-full left-0 top-0 z-100'>
        <div className='z-100 shadow-md bg-white'>
            {/* First part of the nav */}
            <div className='hidden md:block bg-[#000000] py-3 items-center'>
                <div className=''>
                    <div className='flex max-w-7xl md:px-4 text-center text-sm justify-end'>
                        <div className='pr-29'>
                            <p className='text-white inline-flex items-center justify-center text-xs '>
                                Summer Sale For All Swim And Free Express Delivery - OFF 50%
                                <Link href='/shop' className='hover:text-xl hover:text-emerald-600 transition-all duration-300 ease-in-out'>
                                    <span className='ml-2 inline-flex items-center underline font-semibold cursor-pointer'>ShopNow</span>
                                </Link>
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
            <div className='w-full z-100 hidden md:block bg-white'>
                <div className='container mx-auto flex md:flex-row items-center justify-between py-5 md:py-8 gap-40'>
                    <div className='font-bold'>
                        <h3>CARTS</h3>
                    </div>
                    <div className='flex md:flex-row items-center md:gap-40 gap-30'>
                        <div className='flex md:flex-row gap-8'>
                            <Link href="/" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>Home</Link>
                            <Link href="/contact" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>Contact</Link>
                            <Link href="/about" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px]'>About</Link>
                            <Link href="/auth/signup" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl md:text-[17px] whitespace-nowrap'>Sign Up</Link>
                        </div>
                        <div className='flex md:flex-row gap-4 items-center justify-center'>
                            <div className="flex items-center justify-center mr-40">
                                <Search />
                            </div>
                            <div className='justify-end flex gap-4'>
                                <Heart size={20}/>
                                <ShoppingCart size={20}/>
                            </div>
                            {/* Profile Icon */}
                            {/* <ProfileDropdownCustom /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* ************Mobile navbar *************/}
            <div className='md:pb-0 pb-10'>
                <div className='md:hidden bg-[#000000] py-3 flex items-center'>
                <div className='px-10'>
                    <div className='w-full text-center text-sm mx-auto justify-center'>
                        <div className=''>
                            <p className='text-white inline-flex items-center justify-center text-xs '>
                                Summer Sale For All Swim And Free Express Delivery - OFF 50%
                                <Link href='/shop' className='hover:text-xl hover:text-emerald-600 transition-all duration-300 ease-in-out'>
                                    <span className='ml-2 inline-flex items-center underline font-semibold cursor-pointer'>ShopNow</span>
                                </Link>
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
                <div className='md:hidden flex justify-between mt-10 px-10'>
                    <h3>CARTS</h3>
                    <button onClick={() => setMobileMenu(!mobileMenu)}>
                        {mobileMenu ? < X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {/* {Mobile Menu Button} */}
            {mobileMenu && (
                <div className='md:hidden px-4 pb-8 space-y-2 flex'>
                    {/* Links start*/}
                    <div className='flex-cols justify-center items-center bg-white mx-auto'>
                        <div className='flex flex-col w-full justify-center items-center gap-4 mb-6'>
                            <Link href="/" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl'>Home</Link>
                            <Link href="/contact" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl'>Contact</Link>
                            <Link href="/about" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl'>About</Link>
                            <Link href="/auth/signup" className='hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer text-2xl whitespace-nowrap'>Sign Up</Link>
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
                            {/* <ProfileDropdownCustom /> */}
                        </div>
                    </div>
                    {/* Links end */}
                </div>
            )}
        </div>
    </div>       
  )
}

export default Navbar

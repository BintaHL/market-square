import React from 'react'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Search } from 'lucide-react';


const AuthNav = () => {
    return (
        <div className='z-100'>
            {/* border-b-2 border-b-mist-400' */}
            <div className='fixed w-full'>
                {/* The black upper part of the nav */}
                <div className="hidden md:block">
                    <div className="bg-dark flex items-center justify-center">
                        <div className='w-[80%] flex text-center text-sm justify-between'>
                            <p className='text-white text-xs'>
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                                <span className='ml-2 inline-flex items-center underline font-semibold cursor-pointer'>ShopNow</span>
                            </p>
                            <div className='ml-40 text-sm'>
                                <p className='text-white flex items-center gap-2'>English
                                    <span className='inline-flex items-center text-xs'><ChevronDown className='text-white' size={15} /></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* The second part of the nav */}
                <div className='shadow-sm bg-light z-100 py-5'>
                    <div className='w-[80%] mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div className='font-bold'>
                                <h3>CARTS</h3>
                            </div>
                            <div className=''>
                                <Link href="/" className='pr-6 hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer'>Home</Link>
                                <Link href="/contact" className='pr-6 hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer'>Contact</Link>
                                <Link href="/about" className='pr-6 hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer'>About</Link>
                                <Link href="/auth/signin" className='pr-6 hover:underline hover:decoration-mist-400 hover:decoration-2 hover:underline-offset-4 cursor-pointer'>Sign Up</Link>
                            </div>
                            <div className='flex gap-4'>
                                <div className="relative flex items-center">

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthNav

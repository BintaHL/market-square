import React from 'react'
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';


const HomePage = () => {
  return (
    <div className='z-100'>
        <div className='h-[120px] border-b-2 border-b-mist-400'>
            <div className='fixed mx-auto h-[40px] bg-[#000000] w-full py-3 '>
                <div className=''>
                    {/* The black upper part of the nav */}
                    <div className='flex flex-1 text-center text-sm justify-center'>
                        <div className=''>
                            <p className='text-white inline-flex items-center justify-center text-xs '>
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                                <span className='ml-2 inline-flex items-center underline font-semibold cursor-pointer'>ShopNow</span>
                            </p>
                        </div>
                        <div className='ml-40 text-sm'>
                            <p className='text-white flex items-center gap-2'>English 
                                <span className='inline-flex items-center text-xs'><ChevronDown className='text-white' size={15}/></span>
                            </p>
                        </div>
                    </div>
                    {/* The second part of the nav */}
                    <div className='pb-10 shadow-sm '>
                        <div className='container mx-auto'>
                        <div className='h-15 flex pt-12 justify-between'>
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
                            <Heart size={20}/>
                            <ShoppingCart size={20}/>
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

export default HomePage


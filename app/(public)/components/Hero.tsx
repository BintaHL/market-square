import React from 'react'
import SideNav from './SideNav'
import Image from 'next/image'
import { RiAppleLine } from "react-icons/ri";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='min-h-100 w-full mt-38 mb-50 md:mb-20'>
        <div className='container flex justify-between mx-auto'>
            <div className='w-full flex flex-col md:flex-row justify-between gap-10'>
                <div className='hidden md:block'>
                    <SideNav />
                </div>
                <div className='mt-10'>
                    <main className='flex-1 h-[350px] items-center justify-center'>
                        <div className='bg-black text-white py-10 px-10 max-w-5xl w-full mx-auto'>
                            <div className='flex flex-col md:flex-row w-full'>
                                <div className='w-1/2'>
                                    <div className='flex gap-4'>
                                        <RiAppleLine size={50}/>
                                        <p className='text-nowrap mt-3 font-medium'> iPhone 14 Series</p>
                                    </div>
                                    <h1 className='text-white text-5xl mt-5 space-y-7'>Up to 10% <br /> off Voucher</h1>
                                    <p className='underline decoration-white decoration-2 underline-offset-4 mt-5'>
                                        <Link href="/allproducts">Shop Now <span className='inline-block'><ArrowRight size={15} className='text-bold'/></span>
                                        </Link>
                                    </p>
                                </div>
                                <div className='w-1/2'>
                                    <Image src='/images/hero_endframe_large 2.png' alt='Hero Image' width={400} height={400} className='w-auto h-auto'/>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Hero

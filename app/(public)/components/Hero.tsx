import React from 'react'
import SideNav from './SideNav'
import Image from 'next/image'
import { RiAppleLine } from "react-icons/ri";
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  return (
    <div className='container w-full mt-35 min-h-80vh items-center justify-center mx-auto'>
        <div className='flex justify-between mx-auto overflow-hidden'>
            <div className='w-full flex flex-row md:flex-row justify-between md:gap-10'>
                <div className=''>
                    <SideNav />
                </div>   
                <main className='w-full mx-auto flex-1 h-87.5 items-center justify-center mt-10'>
                    <div className='bg-black text-white py-10 px-10 max-w-5xl w-full mx-auto flex flex-col'>
                        <div className='flex flex-col md:flex-row items-center justify-center mx-auto'>
                            <div className='w-1/2 flex flex-col gap-7'>
                                <div className='flex gap-4'>
                                    <RiAppleLine size={50}/>
                                    <p className='text-nowrap mt-3 font-medium'> iPhone 14 Series</p>
                                </div>
                                <h1 className='text-light'>Up to 10% <br /> off Voucher</h1>
                                <Link href="/shop" className='flex items-center underline underline-offset-4 gap-2'>Shop Now <ArrowRightIcon /></Link>
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
  )
}

export default Hero

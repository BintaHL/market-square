import React from 'react'
import SideNav from './SideNav'
import Image from 'next/image'
import { RiAppleLine } from "react-icons/ri";
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

const Hero = () => {
  return (
    <div className='w-full mt-35 min-h-80vh'>
        <div className='container flex justify-between mx-auto'>
            <div className='w-full flex flex-row md:flex-row justify-between gap-10'>
                <div className=''>
                    <SideNav />
                </div>
                <div className='mt-10'>
                    <main className='flex-1 h-87.5 items-center justify-center'>
                        <div className='bg-black text-white py-10 px-10 max-w-5xl w-full mx-auto flex flex-col'>
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-7'>
                                    <div className='flex gap-4'>
                                        <RiAppleLine size={50}/>
                                        <p className='text-nowrap mt-3 font-medium'> iPhone 14 Series</p>
                                    </div>
                                    <h1 className='text-light'>Up to 10% <br /> off Voucher</h1>
                                    <Link href="/cart" className='flex items-center underline underline-offset-4 gap-2'>Shop Now <ArrowRightIcon /></Link>
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

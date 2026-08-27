import React from 'react'
import SideNav from './SideNav'
import Image from 'next/image'
import { RiAppleLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className='min-h-100 w-full mt-38 mb-20'>
        <div className='container flex justify-between mx-auto'>
            <div className='w-full flex flex-col md:flex-row justify-between gap-10'>
                <div className='hidden md:block'>
                    <SideNav />
                </div>
                <div className='mt-10'>
                    <main className='flex-1 h-[350px] items-center justify-center'>
                        <div className='bg-black text-white py-10 px-10 max-w-5xl w-full mx-auto'>
                            <div className='flex'>
                                <div className=''>
                                    <div className='flex gap-4'>
                                        <RiAppleLine size={50}/>
                                        <p className='text-nowrap mt-3 font-medium'> iPhone 14 Series</p>
                                    </div>
                                    <h1>Up to 10% <br /> off Voucher</h1>
                                </div>
                                <div className=''>
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

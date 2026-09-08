import { BeforeFooterData } from '@/data'
import Image from 'next/image';
import React from 'react'

interface BeforeFooterItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

interface BeforeFooterProps {
    BeforeFooterData: BeforeFooterItem[];
}

const BeforeFooter = ({ BeforeFooterData = [] }: BeforeFooterProps) => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-20 mb-20'>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center md:text-left mb-16 md:mb-20">
          
          {/* Stat 1 */}
          <div className="pb-6 md:pb-0 md:pr-8 md:pl-0">
            <h2 className="font-bold text-3xl md:text-4xl text-black">500+</h2>
            <p className="text-gray-500 text-xs md:text-[13px] mt-1">
              Active Sellers in our site
            </p>
          </div>

          {/* Stat 2 */}
          <div className="py-6 md:py-0 md:px-8">
            <h2 className="font-bold text-3xl md:text-4xl text-black">3,000+</h2>
            <p className="text-gray-500 text-xs md:text-[13px] mt-1">
              High quality products
            </p>
          </div>

          {/* Stat 3 */}
          <div className="pt-6 md:pt-0 md:pl-8">
            <h2 className="font-bold text-3xl md:text-4xl text-black">45,000+</h2>
            <p className="text-gray-500 text-xs md:text-[13px] mt-1">
              Active and Happy Customers
            </p>
          </div>
          
        </div>

        {/* Features Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center'>
            {BeforeFooterData?.map((item, index) => {
                return (
                    <div key={index} className='flex flex-col items-center max-w-sm mx-auto'>
                        <div className='w-20 h-20 rounded-full bg-[#c0c0c0] flex justify-center items-center mb-5'>
                            <Image 
                              src={item.image} 
                              alt={item.title} 
                              width={50} 
                              height={50} 
                              className='rounded-full bg-black p-2 object-contain'
                            />
                        </div>
                        <h3 className='text-black font-bold text-lg mb-1'>{item.title}</h3>
                        <p className='text-sm text-gray-600 leading-relaxed'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default BeforeFooter

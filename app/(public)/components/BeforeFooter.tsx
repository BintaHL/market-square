import { BeforeFooterData } from '@/data'
import Image from 'next/image';
import React from 'react'

interface BeforeFooterItem {
    id:number;
    image: string;
    title:string;
    description:string;
}

interface BeforeFooterProps{
    BeforeFooterData: BeforeFooterItem[];
}

const BeforeFooter = ({BeforeFooterData = []}:BeforeFooterProps) => {
  return (
    <div className='container mx-auto mt-20'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
            {BeforeFooterData?.map((item, index ) =>{
                return (
                    <div key={index} className='flex-col justify-center items-center'>
                        <div className='w-20 h-20 rounded-full bg-[#c0c0c0] flex justify-center items-center mx-auto mb-5'>
                            <Image src={item.image} alt={item.title} width={50} height={50} className='rounded-full bg-black p-2 justify-center items-center'/>
                        </div>
                        <p className='text-black mt-2 flex justify-center items-center font-bold'>{item.title}</p>
                        <p className='text-sm text-black flex justify-center items-center'>{item.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default BeforeFooter

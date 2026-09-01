import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
  return (
    <div className=" mx-auto">
    <div className='max-w-[80%] flex ml-45 gap-10 min-h-screen'>
        <div className='w-full flex flex-col md:flex-row justify-end gap-5'>
            <div className='w-1/2 h-137.5 flex items-center'>
                <div className='pl-10'>
                    <h1 className='text-4xl font-bold mb-10'>Our Story</h1>
                    <div>
                        <p>Launched in 2015, Vendora-Cart is South Asia&apos;s premier online shopping <br />
                        marketplace with an active presence in Bangladesh. Supported <br />
                        by wide range of tailored marketing, data and service solutions, <br />
                        Exclusive has 10,500 sallers and 300 brands and serves 3  <br />
                        million customers across the region.</p>
                    </div>
                    <div className='mt-5'>
                        <p>Exclusive has more than 1 Million products to offer, growing at a <br />
                        very fast pace. Vendora-Cart offers a diverse assotment in categories <br /> ranging from consumer.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <Image src='/images/about-portrait.png' alt='about-portrait' width={700} height={250} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutHero

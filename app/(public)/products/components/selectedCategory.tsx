import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import axios from 'axios';
import { Button } from '@/app/global-components/buttonsLayout/Button';

interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProducts(): Promise<FakeStoreProduct[]> {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res.data;

    return data

  } catch (error) {
    console.error("Failed to Fetch Data", error);
    return [];
  }
}

const SelectedCategory = async() => {
  const products = await getProducts();

    return (
        <div className='w-[80%] mx-auto my-20'>
            <main className='flex min-h-87.5'>
                <div className='bg-black text-white flex items-center p-10'>
                    {products.slice(0,1).map((product, index:number) => {
                        return (
                            <div key={`${product.id} - ${index}`} className='flex items-center justify-between gap-20'>
                                <div className='flex flex-col gap-7'>
                                    <div className='flex gap-4'>
                                        <p className='text-nowrap mt-3 font-medium text-success'>Categories</p>
                                    </div>
                                    <h1 className='text-light'>Enhance Your Shopping  Experience </h1>
                                        <br />
                                    <Button href="/cart" className='bg-success! w-40! text-nowrap'>Buy Now!</Button>
                                </div>
                              
                                    <Image src={product.image} alt='Hero Image' width={1000} height={50} className='w-70 h-[40%]' />
                              
                            </div>

                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default SelectedCategory
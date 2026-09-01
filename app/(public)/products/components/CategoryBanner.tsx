"use client"

import Image from 'next/image'
import axios from 'axios';
import { Button } from '@/app/global-components/buttonsLayout/Button';
import { useEffect, useState } from 'react';

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



const CategoryBanner = () => {
    const [products, setProducts] = useState<FakeStoreProduct[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const res = await axios.get<FakeStoreProduct[]>(
                    "https://fakestoreapi.com/products"
                );

                // this Shuffle the data array randomly and also Set the state with the newly shuffled array
                const randomizedProducts = res.data.sort(() => Math.random() - 0.5);
                setProducts(randomizedProducts);

                setProducts(res.data);
            } catch (error) {
                console.error("Failed to Fetch Data", error);
                setError("Failed to load products.");
            } finally {
                setIsLoading(false);
            }
        };

        getProducts();
    }, []);

    // Loading State
    if (isLoading) {
        return (
            <div className="w-[80%] mx-auto my-20">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary h-10 w-5 rounded-sm animate-pulse" />

                        <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
                    </div>

                    <div className="h-8 w-52 bg-gray-200 rounded animate-pulse" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col gap-4 border rounded-sm overflow-hidden"
                            >
                                <div className="w-full aspect-[1/0.82] bg-gray-100 animate-pulse" />

                                <div className="px-2 flex flex-col gap-2">
                                    <div className="h-5 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                                </div>

                                <div className="flex justify-between px-2 pb-3">
                                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-4 w-10 bg-gray-200 rounded animate-pulse" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="w-[80%] mx-auto my-20 text-center text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className='*:my-20'>
            <main className='w-[80%] mx-auto '>
                <div className='bg-black text-white flex items-center p-10'>
                    {products.slice(0, 1).map((product, index: number) => {
                        return (
                            <div key={`${product.id} - ${index}`} className='flex flex-col-reverse md:flex-row items-center justify-between gap-20'>
                                <div className='max-w-[50%] flex flex-col gap-7'>
                                    <div className='flex gap-4'>
                                        <p className='text-nowrap mt-3 font-medium text-success'>Categories</p>
                                    </div>
                                    <h1 className='text-light'>Enhance Your Shopping  Experience </h1>
                                    <br />
                                    <Button href="/cart" className='bg-success! w-40! text-nowrap'>Buy Now!</Button>
                                </div>
                                <div className="max-w-[50%] flex items-center justify-center text-center">
                                    <Image src={product.image} alt='Hero Image' width={500} height={50} className='w-70 h-[30%]' />
                                </div>

                            </div>

                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default CategoryBanner
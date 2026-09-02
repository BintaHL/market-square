import React from 'react'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


interface PageProps {
  params: Promise<{ id: string}>;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    discountPercentage:number;
    rating:number;
    stock:number;
    availabilityStatus:string;
    images:string[];
   shippingInformation:string;
    brand:string;
}

async function getSingleProduct(id:string): Promise<Product|null> {
  try{
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return (response.data)
  } catch(error){
      if (axios.isAxiosError(error)){
          console.error(error.message);
          return null
      } else {
          console.error("An unexpected error occurred", error)
          return null
      }
    return null
  }
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getSingleProduct(id);
console.log(product)
  if (!product) {
    return (
      <div className='p-10'>
        <p>Product not found.</p>
        <Link href="/dashboard/products">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div className='dark:bg-[#102A43] dark:text-white'>
      <div className='pt-12 items-center w-full flex flex-col justify-center'>
        <div className='w-[80%] mt-10 items-center justify-center mx-auto'>
          <p className='text-2xl text-center'>
            <span className='font-semibold'>Item Category:</span> {product.category}
          </p>
          <div className='flex'>
            <div className='w-1/2 items-center justify-center'>
              {product.images.map((index)=> (
                  <Image key={index} src={index} alt="Image" width={300} height={300} className='mt-4'/>
              ))}
            </div>
            <div className='w-1/2'>
              <h3 className='mt-5'><span className='font-semibold'>Item Title:</span> {product.title}</h3>
              <h2 className='mt-3'><span className='font-semibold'>Item Price:</span> ${product.price}</h2>
              <p className='mt-3'><span className='font-semibold'>Items in Stock: </span> {product.stock}</p>
              <p className='mt-3'><span className='font-semibold'>Item Shipping Duration:</span> {product.shippingInformation}</p>
              <p className='space-y-1.6 mt-3'>
                <span className='font-semibold'>Item Description:</span> {product.description}
              </p>
            </div>
          </div>
          <div className='flex gap-4 mt-5 mb-10 items-center justify-center'>
            <Link href="/admin/products/">
                <Button type='submit' className='hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-xs mt-4'>All Products</Button>
            </Link>
            <Link href={`/admin/products/details/${product.id}`}>
                <Button type='submit' className='hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-xs mt-4'>Edit Product</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
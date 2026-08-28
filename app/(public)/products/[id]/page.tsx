import React from 'react';
import AddToCartButton from "./component/AddToCartButton"; // <-- import the button
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  qty: number,
}

interface PageProps {
  params: Promise<{ id: string }>; 
}

// console.log("The current id is ", id)
async function getSingleProduct(id: string): Promise<Product | null> {
  try {
    const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch product details:', error);
    return null;
  }
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const product = await getSingleProduct(id);
  

  if (!product) {
    return (
      <div className='p-10'>
        <p>Product not found.</p>
        <Link href="/products">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div className='container mx-auto max-h-screen mt-50'>
      <div className='items-center justify-center w-full mx-auto flex flex-col'>
        <h3 className='text-[#666] text-2xl'>
          Category: {product.category}
        </h3>
        <div className='flex flex-col md:flex-row w-full mx-auto gap-10'>
          <div className='flex mt-5 w-1/2 items-center justify-center'>
            <Image 
              src={product?.image || ""} 
              alt={product.title} 
              width={400} 
              height={400} 
              style={{ objectFit: 'contain' }}
              priority 
              className='w-auto h-auto'
            />
          </div>
          <div className='mx-auto w-1/2'>
            <h3 className='mt-10'>{product.title}</h3>
            <p className='text-[#222] mt-3 text-2xl'>${product.price}</p>
            <p className='space-y-1.6 text-[#444] mt-4 pb-4 text-justify'>
              {product.description}
            </p>
          </div>
        </div>
        <div className='flex gap-5'>
          <button className='mt-10 bg-primary py-2 px-4 rounded-sm'>
          <Link href="/allproducts" className='text-white'>Back to Products</Link>
          </button>

           {/* <AddToCartButton product={product} /> */}
          {/* <button className='mt-10 bg-primary py-2 px-4 rounded-sm'>
            <Link href="/cart" className='text-white'>Add to Cart</Link>
          </button> */}
                  <div className="mt-6">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}



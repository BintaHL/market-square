import Link from 'next/link';
import axios from 'axios';
import React from 'react'
import { ChevronRight } from 'lucide-react';

export interface Products{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image:string;
    ratings: number;
    brand:string;
    reviews:string;
}

async function CategoryItems (): Promise<Products[]> {
  try {
    const response = await axios.get<Products[]>('https://fakestoreapi.com/products');
    return response.data; 
  } catch (error) {
    console.error('Failed to fetch store products:', error);
    return [];
  }
}

export default async function Category(){
  const allProducts = await CategoryItems();

  //an array of just the category strings,Set to filter unique values
  const uniqueCategories = Array.from(new Set(allProducts.map(item => item.category)));

  return (
    <div>
        <div className='mx-auto'>
          <ul className='pt-10'>
          {/* Map over unique categories string array*/}
          {uniqueCategories.map((categoryName, index) => {
              return (
                  <li key={index} className='capitalize text-sm pb-6'>
                      {/* Link to a filtered collection page of separate categories */}
                      <div className='flex bg-red-400'>
                        <Link 
                          href={`/dashboard/products?category=${categoryName}`} 
                          className='text-gray-800 hover:text-amber-800 rounded-2xl'>
                          {categoryName} <span><ChevronRight className='inline ml-6' size={15} /></span>
                        </Link>
                      </div>
                  </li>
              )
          })}
          </ul>
        </div>
    </div>
  )
}
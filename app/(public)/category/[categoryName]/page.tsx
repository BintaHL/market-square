'use client'
import Image from "next/image";
// import { Input } from '@/components/ui/input'
// import React from 'react'

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// List category
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

export default function FilterLayout() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        // const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  const currentSearch = searchParams.get('q') || '';
  const currentCategory = searchParams.get('category') || 'All';

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(currentSearch.toLowerCase());
    
    const matchesCategory = 
      currentCategory === 'All' || 
      product.category.toLowerCase() === currentCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value && value !== 'All') {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  };

  const categories = ['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes', 'Miscellaneous'];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-50 rounded-xl shadow-md space-y-6 mt-50">
      <h1 className="text-2xl font-bold text-slate-800">Categories</h1>
      
      <div className="space-y-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={currentSearch}
          onChange={(e) => updateFilters('q', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />

        {/* Category List Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
          {categories.map((cat) => {
            const isActive = currentCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => updateFilters('category', cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Results Area */}
      {isLoading ? (
        <div className="text-center py-8 text-slate-500 font-medium animate-pulse">
          Loading products from API...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-w-1 aspect-h-1 rounded-lg bg-white group-hover:opacity-75 h-48 w-full flex items-center justify-center p-2">
                    <Image
                      src={product.image || product.title}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain max-h-20"
                    />
                  </div>
                  <h3 className="font-semibold text-slate-800 line-clamp-1">{product.title}</h3>
                  <p className="text-sm text-slate-500">{product.category}</p>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{product.description}</p>
                </div>
                <div className="mt-4 text-blue-600 font-bold">${product.price}</div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 text-slate-400">
              No products match your criteria.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
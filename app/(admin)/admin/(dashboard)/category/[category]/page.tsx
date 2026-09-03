"use client";

import { use, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/app/global-components/buttonsLayout/Button";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface PageProps {
  params: Promise<{ category: string }>; 
}

export default function CategoryDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  
  const currentCategory = resolvedParams.category ? decodeURIComponent(resolvedParams.category) : "";

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchAndFilterProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch from the main API endpoint
      const res = await axios.get<Product[]>("https://fakestoreapi.com/products");
      
      // 💡 SAFETY 1: Verify res exists and res.data is actually a real array
      if (!res || !Array.isArray(res.data)) {
        throw new Error("The API server is currently offline or sending invalid data. Please try again later.");
      }

      // 💡 SAFETY 2: Safe fallback variable assignment
      const rawProducts = res.data;

      // Filter out elements safely checking if category property exists
      const filtered = rawProducts.filter(
        (product) => product && product.category && product.category.toLowerCase() === currentCategory.toLowerCase()
      );

      setProducts(filtered);
    } catch (err) {
      console.error("Failed to load products:", err);
      // Fallback message handles both Axios timeouts and code validation errors
      setError("Network error or server timeout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  fetchAndFilterProducts();
}, [currentCategory]);

  if (isLoading) return <p className="p-8 text-center animate-pulse text-gray-500">Loading products...</p>;
  if (error) return <p className="p-8 text-center text-red-500 font-medium">{error}</p>;

  return (
    <main className="max-w-4xl mx-auto py-12 px-4 items-center justify-center">
      <h1 className="text-2xl font-bold capitalize text-gray-800 mb-6 border-b pb-2">
        {currentCategory} Inventory ({products.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-md flex gap-4 bg-white shadow-sm">
            <Image src={product.image} alt={product.title} width={200} height={200} className="w-16 h-16 object-contain" />
            <div>
              <h2 className="font-semibold text-[13px] text-gray-800 line-clamp-1">{product.title}</h2>
              <p className="text-emerald-600 font-bold">${product.price}</p>
              <div className='flex items-center justify-center mt-3 mb-10'>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link href="/admin">
          <Button className='bg-primary hover:bg-primary-hover text-white font-bold py-2 px-2 rounded text-xs'>
              All Products
          </Button>
        </Link>
      </div>
    </main>
  );
}
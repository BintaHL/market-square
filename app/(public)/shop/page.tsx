"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );

        console.log("FakeStore status:", res.status);
        console.log("FakeStore products:", res.data);

        setProducts(res.data);
      } catch (error) {
        console.error("Failed to Fetch Data", error);
        setError("Failed to load products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  // Loading State
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-30">
        <div className="w-[80%] mx-auto space-y-10">
          <header className="border-b border-gray-200 pb-5">
            <div className="h-10 w-64 bg-gray-200 rounded animate-pulse" />
          </header>

          <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />

          {[...Array(2)].map((_, categoryIndex) => (
            <section key={categoryIndex} className="space-y-6">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />

              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {[...Array(4)].map((_, productIndex) => (
                  <div
                    key={productIndex}
                    className="bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden p-4 shadow-sm"
                  >
                    <div className="h-48 w-full bg-gray-100 rounded-lg animate-pulse" />

                    <div className="flex flex-col pt-4 space-y-3">
                      <div className="h-5 bg-gray-200 rounded animate-pulse" />
                      <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />

                      <div className="flex justify-between pt-2">
                        <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
                      </div>

                      <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    );
  }

  // Error State
  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-30">
        <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-500 font-medium mb-4">{error}</p>

            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary-hover"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Group products by category
  const groupedProducts = products.reduce(
    (acc, product) => {
      const category = product.category;

      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(product);

      return acc;
    },
    {} as Record<string, Product[]>
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-30">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Page Header */}
        <header className="border-b border-gray-200 pb-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Our Collection
          </h1>
        </header>

        {/* Back to Home */}
        <div className="mb-4">
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:text-green-600 mb-4 inline-block"
          >
            &larr; Back to Home
          </Link>
        </div>

        {/* Categories */}
        {Object.entries(groupedProducts).map(([categoryName, items]) => (
          <section key={categoryName} className="space-y-6">
            {/* Category Header */}
            <h2 className="text-2xl font-bold capitalize tracking-tight text-gray-800 border-l-4 border-emerald-600 pl-3">
              {categoryName}
            </h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Product Image */}
                  <div className="rounded-lg bg-white group-hover:opacity-75 h-48 w-full flex items-center justify-center p-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain max-h-20"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-end pt-4 space-y-2">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-10">
                      {product.title}
                    </h3>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>

                      <div className="flex items-center text-xs text-amber-500 bg-amber-50 px-2 py-1 rounded">
                        ★ {product.rating.rate} ({product.rating.count})
                      </div>
                    </div>

                    <Link
                      href={`/products/${product.id}`}
                      className="text-primary decoration-2 underline-offset-4 underline hover:text-green-600"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

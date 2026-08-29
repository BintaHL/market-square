"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const CategoryDetailPage = () => {
  const params = useParams();

  const categoryParam = params?.category;

  const category =
    typeof categoryParam === "string"
      ? decodeURIComponent(categoryParam)
      : "";

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) return;

    const getCategoryProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await axios.get<Product[]>(
          `https://fakestoreapi.com/products/category/${encodeURIComponent(
            category
          )}`
        );

        console.log("Category:", category);
        console.log("FakeStore status:", res.status);
        console.log("Category products:", res.data);

        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch category products:", error);
        setError("Failed to load products for this category.");
      } finally {
        setIsLoading(false);
      }
    };

    getCategoryProducts();
  }, [category]);

  // Loading State
  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-40">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-4" />

            <div className="h-10 w-64 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Product Skeletons */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden p-4 shadow-sm"
              >
                <div className="h-48 w-full bg-gray-100 rounded-lg animate-pulse" />

                <div className="flex flex-col pt-4 space-y-3">
                  <div className="h-5 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-3/4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Error State
  if (error) {
    return (
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-40">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-500 font-medium mb-4">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary-hover"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-40">
      <div className="max-w-7xl mx-auto">
        {/* Back Link and Header */}
        <div className="mb-8">
          <Link
            href="/shop"
            className="text-sm font-medium text-primary hover:text-green-600 mb-4 inline-block"
          >
            &larr; Back to shop
          </Link>

          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 capitalize border-l-4 border-primary pl-3">
            {category}
          </h1>
        </div>

        {/* Empty State */}
        {products.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-500">
              No products found in this category.
            </p>
          </div>
        ) : (
          /* Product Cards */
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Product Image */}
                <div className="rounded-lg bg-white h-48 w-full flex items-center justify-center p-2">
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
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px]">
                    {product.title}
                  </h3>

                  <p className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>

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
        )}
      </div>
    </main>
  );
};

export default CategoryDetailPage;


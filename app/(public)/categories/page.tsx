"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await axios.get<string[]>(
          "https://fakestoreapi.com/products/categories"
        );

        console.log("Categories status:", res.status);
        console.log("Categories:", res.data);

        setCategories(res.data);
      } catch (error) {
        console.error("Failed to Fetch Categories", error);
        setError("Failed to load categories. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getCategories();
  }, []);

  // Loading State
  if (isLoading) {
    return (
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-8" />

          <div className="flex flex-col gap-4 pr-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2"
              >
                <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
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
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
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
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-gray-800 tracking-tight mb-4 text-nowrap pr-2 font-semibold text-2xl">
          Shopping category
        </h4>

        {/* Categories Link List */}
        <div className="flex flex-col gap-4 pr-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/categories/${encodeURIComponent(category)}`}
              className="flex items-center justify-between p-2 hover:border-b-2 hover:border-b-primary hover:text-primary transition-all duration-200 group text-left"
            >
              <span className="font-semibold capitalize text-gray-800">
                {category}
              </span>

              <span className="text-xl text-gray-400 group-hover:text-primary transform group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CategoriesPage;

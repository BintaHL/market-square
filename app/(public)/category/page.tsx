"use client";

import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ratings: number;
  brand: string;
  reviews: string;
}

export default function Category() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCategoryItems = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get<Products[]>(
          "https://fakestoreapi.com/products"
        );

        console.log("FakeStore status:", response.status);
        console.log("FakeStore products:", response.data);

        setAllProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch store products:", error);
        setError("Failed to load categories.");
      } finally {
        setIsLoading(false);
      }
    };

    getCategoryItems();
  }, []);

  const uniqueCategories = Array.from(
    new Set(allProducts.map((item) => item.category))
  );

  if (isLoading) {
    return (
      <div className="mx-auto mt-20">
        <ul className="pt-10">
          {[...Array(4)].map((_, index) => (
            <li key={index} className="pb-6">
              <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto mt-20 text-sm text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto mt-20">
        <ul className="pt-10">
          {uniqueCategories.map((categoryName) => (
            <li
              key={categoryName}
              className="capitalize text-sm pb-6"
            >
              <div className="flex">
                <Link
                  href={`/category/${categoryName}`}
                  className="text-gray-800 hover:text-amber-800 rounded-2xl"
                >
                  {categoryName}

                  <span>
                    <ChevronRight
                      className="inline ml-6"
                      size={15}
                    />
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


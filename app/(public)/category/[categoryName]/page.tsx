"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
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
        console.error("Error fetching products:", error);

        if (axios.isAxiosError(error)) {
          console.error("Axios message:", error.message);
          console.error("Axios status:", error.response?.status);
          console.error("Axios data:", error.response?.data);
        }

        setError("Failed to load products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const currentSearch = searchParams.get("q") || "";
  const currentCategory = searchParams.get("category") || "All";

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(currentSearch.toLowerCase());

    const matchesCategory =
      currentCategory === "All" ||
      product.category.toLowerCase() === currentCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value && value !== "All") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`);
  };

  const categories = [
    "All",
    "Clothes",
    "Electronics",
    "Furniture",
    "Shoes",
    "Miscellaneous",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-50 rounded-xl shadow-md space-y-6 mt-50">
      <h1 className="text-2xl font-bold text-slate-800">
        Categories
      </h1>

      <div className="space-y-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={currentSearch}
          onChange={(e) => updateFilters("q", e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />

        {/* Category List Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
          {categories.map((cat) => {
            const isActive =
              currentCategory.toLowerCase() === cat.toLowerCase();

            return (
              <button
                key={cat}
                type="button"
                onClick={() => updateFilters("category", cat)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-800"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm animate-pulse"
            >
              <div className="h-48 bg-slate-200 rounded-lg mb-4" />

              <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-slate-200 rounded w-1/2 mb-2" />
              <div className="h-3 bg-slate-200 rounded w-full mb-1" />
              <div className="h-3 bg-slate-200 rounded w-4/5" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-8 text-red-500 font-medium">
          {error}
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
                  {/* Product Image */}
                  <div className="rounded-lg bg-white h-48 w-full flex items-center justify-center p-2">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain max-h-40"
                      />
                    ) : (
                      <div className="text-sm text-slate-400">
                        No image available
                      </div>
                    )}
                  </div>

                  {/* Product Information */}
                  <h3 className="font-semibold text-slate-800 line-clamp-1">
                    {product.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {product.category}
                  </p>

                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-4 text-blue-600 font-bold">
                  ${product.price}
                </div>
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

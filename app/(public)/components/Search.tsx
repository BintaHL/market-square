"use client";

import axios from "axios";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, ChangeEvent } from "react";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Search = () => {
  const [value, setValue] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );

        console.log("FakeStore status:", response.status);
        console.log("FakeStore products:", response.data);

        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load products.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelectProduct = (id: number) => {
    router.push(`/products/${id}`);
  };

  const filteredSuggestions = products
    .filter((item) => {
      const searchTerm = value.toLowerCase().trim();
      const itemTitle = item?.title?.toLowerCase() || "";

      return searchTerm && itemTitle.includes(searchTerm);
    })
    .slice(0, 5);

  return (
    <div className="max-w-md mx-auto absolute">
      <div className="relative flex items-center w-full justify-center">
        <Input
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Search products..."
          className="w-60 border-2 bg-green-600 border-gray-400 focus-visible:ring-primary rounded-sm"
        />

        <SearchIcon className="absolute h-4 w-8 ml-40 text-gray-400 pointer-events-none" />
      </div>

      {/* Loading */}
      {isLoading && value && (
        <div className="border border-gray-200 rounded-md shadow-lg bg-white z-10 relative mt-2">
          <div className="p-3 text-sm text-gray-500">
            Loading products...
          </div>
        </div>
      )}

      {/* Error */}
      {error && value && (
        <div className="border border-gray-200 rounded-md shadow-lg bg-white z-10 relative mt-2">
          <div className="p-3 text-sm text-red-500">
            {error}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {!isLoading && !error && filteredSuggestions.length > 0 && (
        <div className="border border-gray-200 rounded-md shadow-lg bg-white overflow-hidden z-10 relative mt-2">
          {filteredSuggestions.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectProduct(item.id)}
              className="p-3 cursor-pointer hover:bg-amber-50 border-b last:border-b-0 border-gray-100 transition-colors text-sm text-gray-700"
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search

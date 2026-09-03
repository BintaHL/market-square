"use client";

import Image from "next/image";
import axios from "axios";
import { Button } from "@/app/global-components/buttonsLayout/Button";
import { useEffect, useState } from "react";

interface FakeStoreProduct {
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

const CategoryBanner = () => {
  const [products, setProducts] = useState<FakeStoreProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const res = await axios.get<FakeStoreProduct[]>(
          "https://fakestoreapi.com/products"
        );

        const randomizedProducts = [...res.data].sort(
          () => Math.random() - 0.5
        );

        console.log("Products:", randomizedProducts);

        setProducts(randomizedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to load products.");
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="w-[80%] mx-auto my-20">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[80%] mx-auto my-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="w-[80%] mx-auto my-20 text-center">
        No products found.
      </div>
    );
  }

  const product = products[0];

  return (
    <div className="*:my-20">
      <main className="w-[80%] mx-auto">
        <div className="bg-black text-white flex items-center p-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-20 w-full">
            
            <div className="max-w-[50%] flex flex-col gap-7">
              <div className="flex gap-4">
                <p className="text-nowrap mt-3 font-medium text-success">
                  Categories
                </p>
              </div>

              <h1 className="text-light">
                Enhance Your Shopping Experience
              </h1>

              <Button
                href="/cart"
                className="bg-success! w-40! text-nowrap"
              >
                Buy Now!
              </Button>
            </div>

            <div className="max-w-[50%] flex items-center justify-center text-center">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="w-70 h-70 object-contain"
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoryBanner;
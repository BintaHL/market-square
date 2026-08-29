"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AddToCartButton from "./component/AddToCartButton";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  qty: number;
}

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get<Product>(
          `https://fakestoreapi.com/products/${id}`
        );

        console.log("FakeStore status:", response.status);
        console.log("FakeStore product:", response.data);

        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
        setError("Failed to load product details.");
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      getSingleProduct();
    }
  }, [id]);

  // Loading State
  if (isLoading) {
    return (
      <div className="w-[80%] mx-auto mt-50">
        <div className="flex flex-col items-center justify-center w-full mx-auto gap-10">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />

          <div className="flex flex-col md:flex-row w-full mx-auto gap-10">
            {/* Image Skeleton */}
            <div className="flex mt-5 mx-auto w-1/2 items-center justify-center">
              <div className="w-[400px] h-[400px] bg-gray-100 rounded animate-pulse" />
            </div>

            {/* Product Details Skeleton */}
            <div className="mx-auto w-1/2 space-y-5">
              <div className="mt-10 h-8 w-3/4 bg-gray-200 rounded animate-pulse" />

              <div className="h-8 w-28 bg-gray-200 rounded animate-pulse" />

              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !product) {
    return (
      <div className="w-[80%] mx-auto mt-50 p-10 text-center">
        <p className="text-red-500 mb-4">
          {error || "Product not found."}
        </p>

        <Link
          href="/allproducts"
          className="text-primary underline hover:text-green-600"
        >
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-auto max-h-screen mt-50">
      <div className="items-center justify-center w-full mx-auto flex flex-col">
        {/* Category */}
        <h3 className="text-[#666] text-2xl">
          Category: {product.category}
        </h3>

        <div className="flex flex-col md:flex-row w-full mx-auto gap-10">
          {/* Product Image */}
          <div className="flex mt-5 mx-auto w-1/2 items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              style={{ objectFit: "contain" }}
              priority
              className="w-auto h-auto"
            />
          </div>

          {/* Product Information */}
          <div className="mx-auto w-1/2">
            <h3 className="mt-10">
              {product.title}
            </h3>

            <p className="text-[#222] mt-3 text-2xl">
              ${product.price}
            </p>

            <p className="space-y-1.6 text-[#444] mt-4 pb-4 text-justify">
              {product.description}
            </p>
          </div>
        </div>

        {/* Add To Cart */}
        <div className="flex gap-5">
          <div className="mt-6">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

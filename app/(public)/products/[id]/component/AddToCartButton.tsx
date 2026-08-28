"use client";
import { useState } from "react";
import { useCart } from "@/app/(public)/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type FakeStoreProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  //   rating: { rate: number; count: number; };
};

export default function AddToCartButton({
  product,
}: {
  product: FakeStoreProduct;
}) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const increase = () => setQty((prev) => prev + 1);
  const decrease = () => setQty((prev) => (prev > 1 ? prev - 1 : 1)); // can't go below 1

  const handleClick = () => {
    addToCart({
      id: product.id,
      name: product.title, // map title -> name
      price: product.price,
      image: product.image,
      qty: qty,
    });
    toast.success(`${qty} x {product.title} added to cart`);
     router.push ("/cart")
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <p className="font-semibold">Quantity:</p>
        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={decrease}
            className="px-4 py-2 text-xl font-bold hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-6 py-2 border-x border-gray-300">{qty}</span>
          <button
            onClick={increase}
            className="px-4 py-2 text-xl font-bold hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={handleClick}
        className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 w-full"
      >
        Add To Cart
      </button>
    </div>
  );
}

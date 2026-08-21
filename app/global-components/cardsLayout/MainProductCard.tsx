import { EyeIcon, HeartIcon, RatIcon, Star, StarHalf } from "lucide-react"
import React from 'react'
import { AddToCartButton } from "../buttonsLayout/Button";


interface MainProductCardProps {
  image: string;
  name: string;
  price: string;
  reviews: number;
  rating?: number;
  badge?: string;
  badgeColor?: string;
  imageAlt?: string;
}

export function MainProductCard({
  image,
  name,
  price,
  reviews,
  rating = 5,
  badge = "NEW",
  badgeColor = "bg-success",
  imageAlt = "Product",
}: MainProductCardProps) {
  return (
    <div className="w-67.5 h-80.5 flex flex-col gap-4 opacity-100  shadow-sm shadow-grayish">
      {/* Top Card */}
      <div className="group relative w-67.5 h-55.5 bg-card-bg flex flex-col items-center justify-center gap-10">

        {/* Product Image */}
        <img
          src={image}
          alt={imageAlt}
          className="w-43 h-45 object-contain my-8"
        />

        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 left-3 w-12.75 h-6.5 rounded-sm ${badgeColor} text-light flex items-center justify-center`}>
            <p className="text-[12px] font-normal leading-4.5 uppercase">
              {badge}
            </p>
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 w-8.5 h-19 flex flex-col gap-2">
          <button
            type="button"
            aria-label="Add to wishlist"
            className="w-8.5 h-8.5 flex items-center justify-center bg-light rounded-full"
          >
            <HeartIcon className="w-5 h-5" />
          </button>

          <button
            type="button"
            aria-label="View product"
            className="w-8.5 h-8.5 flex items-center justify-center bg-light rounded-full"
          >
            <EyeIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <AddToCartButton href="/about">Add to Cart</AddToCartButton>
        </div>
      </div>

      {/* Bottom Card Content */}
      <div className="w-55.25 h-21 flex flex-col gap-2 pl-2">
        {/* Product Name */}
        <h3 className="text-base font-medium leading-5">
          {name}
        </h3>

        {/* Price + Rating */}
          <span className="text-base font-semibold">
            {price}
          </span>

          {/* Stars */}
        <div className="flex items-center gap-2">
          <div className="flex text-[#FFAD33]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="w-4 h-4"
                fill={index < rating ? "currentColor" : "none"}
              />
            ))}
          </div>

          {/* Reviews */}
          <p className="text-sm text-[#7B7B7B] leading-5">
            ({reviews})
          </p>
        </div>
      </div>
    </div>
  );
}



// USAGE OF THE ABOVE IN OTHER PAGES

{/* <ProductCard
  image="/globe.svg"
  name="Product Name"
  price="₦25,000"
  reviews={55}
/>

<ProductCard
  image="/laptop.svg"
  name="Laptop"
  price="₦450,000"
  reviews={32}
/>

<ProductCard
  image="/phone.svg"
  name="Smartphone"
  price="₦280,000"
  reviews={87}
  badge="SALE"
  rating={4}
/> */}
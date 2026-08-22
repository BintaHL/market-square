import {
  EyeIcon,
  HeartIcon,
  Star,
  StarHalf,
} from "lucide-react";
import { AddToCartButton } from "../buttonsLayout/Button";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  reviews: number;
  rating?: number;
  badge?: string;
  badgeColor?: string;
  imageAlt?: string;
}

export function ProductCard({
  image,
  name,
  price,
  reviews,
  rating = 5,
  badge = "NEW",
  badgeColor = "bg-success",
  imageAlt = "Product",
}: ProductCardProps) {
  return (
    <div className="w-full min-w-0 flex flex-col gap-4 shadow-sm shadow-grayish">

      {/* TOP CARD */}
      <div className="group relative w-full aspect-[1/0.82] bg-card-bg flex flex-col items-center justify-center overflow-hidden">

        {/* Product Image */}
        <Image
          src={image}
          alt={imageAlt}
          className="w-[65%] h-[75%] object-contain"
          width={100}
          height={50}
        />

        {/* Badge */}
        {badge && (
          <div
            className={`absolute top-3 left-3 w-12.75 h-6.5 rounded-sm ${badgeColor} text-light flex items-center justify-center`}
          >
            <p className="text-[12px] font-normal leading-4.5 uppercase">
              {badge}
            </p>
          </div>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">

          {/* Wishlist */}
          <button
            type="button"
            aria-label="Add to wishlist"
            className="w-8.5 h-8.5 flex items-center justify-center bg-light rounded-full"
          >
            <HeartIcon className="w-5 h-5" />
          </button>

          {/* View Product */}
          <button
            type="button"
            aria-label="View product"
            className="w-8.5 h-8.5 flex items-center justify-center bg-light rounded-full"
          >
            <EyeIcon className="w-5 h-5" />
          </button>

        </div>

        {/* Add To Cart */}
        <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <AddToCartButton
            href="/about"
            className="bg-red-900!"
          >
            Add to Cart
          </AddToCartButton>
        </div>

      </div>


      {/* BOTTOM CARD CONTENT */}
      <div className="w-full min-w-0 flex flex-col gap-2 px-2">

        {/* Product Name */}
        <h3 className="text-base font-medium leading-5 truncate">
          {name}
        </h3>


        {/* Price */}
        <span className="text-base font-semibold">
          {price}
        </span>


        {/*]  RATING + REVIEWS */}
        <div className="flex items-center gap-2">

          {/* Stars */}
          <div className="flex text-[#FFAD33] shrink-0">

            {Array.from({ length: 5 }).map((_, index) => {

              const starNumber = index + 1;

              // Full Star
              if (rating >= starNumber) {
                return (
                  <Star
                    key={index}
                    className="w-4 h-4"
                    fill="currentColor"
                  />
                );
              }

              // Half Star
              if (rating >= starNumber - 0.5) {
                return (
                  <StarHalf
                    key={index}
                    className="w-4 h-4"
                    fill="currentColor"
                  />
                );
              }

              // Empty Star
              return (
                <Star
                  key={index}
                  className="w-4 h-4"
                />
              );
            })}

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


// ------------------------------------------
// USAGE
// ------------------------------------------

/*

<ProductCard
  image="/globe.svg"
  name="Product Name"
  price="₦25,000"
  reviews={55}
  rating={5}
/>


<ProductCard
  image="/laptop.svg"
  name="Laptop"
  price="₦450,000"
  reviews={32}
  rating={4.5}
/>


<ProductCard
  image="/phone.svg"
  name="Smartphone"
  price="₦280,000"
  reviews={87}
  rating={4}
/>


<ProductCard
  image="/watch.svg"
  name="Smart Watch"
  price="₦120,000"
  reviews={43}
  rating={3.5}
  badge="SALE"
  badgeColor="bg-red-500"
/>

*/
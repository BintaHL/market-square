import {
  EyeIcon,
  HeartIcon,
  ShoppingCartIcon,
  Star,
  StarHalf,
} from "lucide-react"
import { Product } from "../types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    image,
    name,
    price,
    reviews,
    rating = 5,
    badge = "NEW",
    badgeColor = "bg-success",
    onAddToCart,
  } = product;

  return (
    <div className="w-full min-w-0 flex flex-col gap-4 shadow-sm shadow-grayish">
      <div className="group relative w-full aspect-[1/0.82] bg-card-bg flex flex-col items-center justify-center overflow-hidden">

        <img
          src={image}
          alt={name}
          className="w-[65%] h-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {badge && (
          <div
            className={`absolute top-3 left-3 w-12.75 h-6.5 rounded-sm ${badgeColor} text-light flex items-center justify-center`}
          >
            <p className="text-[12px] font-normal leading-4.5 uppercase">
              {badge}
            </p>
          </div>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
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

        {/* Hover Actions */}
        <div
          className="
          absolute inset-0
          flex flex-col items-center justify-center
          gap-3
          bg-black/10
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
        >
          {/* View Product */}
          <Link
          // href=""
            href={`../products/${id}`}
            aria-label={`View ${name}`}
            className="
            w-30 h-10
            rounded-sm
            bg-white
            flex items-center justify-center
            shadow-md
            transition-transform duration-200
            hover:scale-110
          "
          >
            View
          </Link>

          {/* Add To Cart */}
          <button
            type="button"
            // onClick={() => onAddToCart?.(id)}
            aria-label={`Add ${name} to cart`}
            className="
            w-12 h-12
            rounded-full
            bg-red-900
            text-white
            flex items-center justify-center
            shadow-md
            transition-transform duration-200
            hover:scale-110
          "
          >
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="w-full min-w-0 flex flex-col gap-2 px-2">
        <h3 className="text-base font-medium leading-5 truncate">
          {name}
        </h3>

        <span className="text-base font-semibold">
          {/* ₦{price.toLocaleString()} */}
        </span>

        <div className="flex items-center gap-2">
          <div className="flex text-[#FFAD33] shrink-0">
            {Array.from({ length: 5 }).map((_, index) => {
              const starNumber = index + 1;

              if (rating >= starNumber) {
                return (
                  <Star
                    key={index}
                    className="w-4 h-4"
                    fill="currentColor"
                  />
                );
              }

              if (rating >= starNumber - 0.5) {
                return (
                  <StarHalf
                    key={index}
                    className="w-4 h-4"
                    fill="currentColor"
                  />
                );
              }

              return (
                <Star key={index} className="w-4 h-4" />
              );
            })}
          </div>

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
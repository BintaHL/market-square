import {
  EyeIcon,
  HeartIcon,
  Star,
  StarHalf,
} from "lucide-react";
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
    <div className="w-full min-w-0 flex flex-col gap-4 shadow-sm shadow-grayish">

      {/* Top Card */}
      <div className="group relative w-full aspect-[1/0.82] bg-card-bg flex flex-col items-center justify-center overflow-hidden">

        {/* Product Image */}
        <img
          src={image}
          alt={imageAlt}
          className="w-[50%] h-[75%] object-contain"
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

        {/* Add To Cart */}
        <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <AddToCartButton href="/about">
            Add to Cart
          </AddToCartButton>
        </div>
      </div>

      {/* Bottom Card Content */}
      <div className="w-full min-w-0 flex flex-col gap-2 px-2">

        {/* Product Name */}
        <h3 className="text-base font-medium leading-5 truncate">
          {name}
        </h3>

        {/* Price */}
        <span className="text-base font-semibold">
          {price}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-[#FFAD33]">
            {Array.from({ length: 5 }).map((_, index) => {
              const starNumber = index + 1;

              if (rating >= starNumber) {
                // Full star
                return (
                  <Star
                    key={index}
                    className="w-4 h-4"
                    fill="currentColor"
                  />
                );
              }

              if (rating >= starNumber - 0.5) {
                // Half star
                return (
                  <StarHalf
                    key={index}
                    className="w-4 h-4"
                    fill="currentColor"
                  />
                );
              }

              // Empty star
              return (
                <Star
                  key={index}
                  className="w-4 h-4"
                />
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



// USAGE OF THE ABOVE IN OTHER PAGES

{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
   
  <MainProductCard image="/globe.svg"
  name="Product Name"
  price="₦25,000"
  reviews={55}
/>

<MainProductCard
  image="/images/google.svg"
  name="Laptop"
  price="₦450,000"
  reviews={32}
/>

<MainProductCard
  image="/images/auth2.png"
  name="Smartphone"
  price="₦280,000"
  reviews={87}
  badge="SALE"
  rating={4}
/> 
<MainProductCard
  image="/images/icon-secure.svg"
  name="Smartphone"
  price="₦280,000"
  reviews={87}
  badge="SALE"
  rating={4}
/> 
</div> */}


// Mapping
{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      {...product}
    />
  ))}
</div> */}


// IN the mapping above either USE
//  {...products} 
// 
            // OR
            
// <ProductCard
//   image={product.image}
//   name={product.name}
//   price={product.price}
//   reviews={product.reviews}
//   rating={product.rating}
// />
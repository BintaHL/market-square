import { EyeIcon, HeartIcon, ShoppingCartIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Card = () => {
  return (
    <div className="w-full min-w-0 flex flex-col gap-4 shadow-sm shadow-grayish">
      <div className="group relative w-full aspect-[1/0.82] bg-card-bg flex flex-col items-center justify-center overflow-hidden">

        <Image
          src="/images/google.svg"
          alt=""
          width={1000}
          height={50}
          className="w-[65%] h-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
        />

       
        <div
            className={`absolute top-3 left-3 w-12.75 h-6.5 rounded-sm bg-primary text-light flex items-center justify-center`}
          >
            <p className="text-[12px] font-normal leading-4.5 uppercase">
              New
            </p>
        </div>
   

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
            href=""
            aria-label={`View`}
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
            aria-label={`Add`}
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
         Product Name
        </h3>

        <span className="text-base font-semibold">
          ₦120,000
        </span>

        <div className="flex items-center gap-2">
          ★★★★★
          
          </div>
          <p className="text-sm text-[#7B7B7B] leading-5">
            (43)
          </p>

        </div>
      </div>
  )
}

export default Card



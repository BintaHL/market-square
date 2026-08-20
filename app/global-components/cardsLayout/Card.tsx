import { EyeIcon, HeartIcon, RatIcon, Star, StarHalf } from "lucide-react"
import React from 'react'

const Card = () => {
  return (
    <div className="w-67.5 h-80.5 flex flex-col gap-4 opacity-100 shadow-md shadow-green-950">
      {/* Top Card */}
      <div className="relative w-67.5 h-55.5 bg-card-bg flex items-center justify-center">

        {/* Product Image */}
        <img
          src="/globe.svg"
          alt="Product"
          className="w-43 h-45 object-contain"
        />

        {/* Right Vertical Icons */}
        <div className="absolute top-3 right-3 w-8.5 h-19 flex flex-col gap-2">
          {/* Icon 1 */}
          <button className="w-8.5 h-8.5 flex items-center justify-center bg-light rounded-full">
            <HeartIcon className="w-5 h-5" />
          </button>
          {/* Icon 2 */}
          <button className="w-8.5 h-8.5 flex items-center justify-center bg-light rounded-full">
            <EyeIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom Card Content */}
      <div className="w-55.25 h-21 flex flex-col gap-2">
        <h3 className="text-base font-medium leading-5">
          Product Name
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">
            ₦25,000
          </span>

          <div className="flex text-[#FFAD33]">
            <Star className="h-4 " /><Star className="h-4" /><Star className="h-4" /><Star className="h-4" /><StarHalf className="h-4" />
          </div>

          <p className="text-sm text-[#7B7B7B] leading-5">
            (55)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
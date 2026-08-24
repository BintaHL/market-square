<div className="w-full max-w-67.5 flex flex-col gap-4">

          {/* Image / Product Preview */}
          <div className="relative w-full aspect-[1/0.82] bg-card-bg flex items-center justify-center rounded-sm overflow-hidden">

            {/* Badge */}
            <span className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white text-xs rounded-sm">
              SALE
            </span>

            {/* Product Image */}
            <img
              src="/placeholder-product.svg"
              alt="Product name"
              className="w-[65%] h-[75%] object-contain"
            />

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                ♡
              </button>

              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                👁
              </button>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/10 opacity-0 hover:opacity-100 transition-opacity">

              <button className="w-30 h-10 bg-white rounded-sm shadow-md">
                View
              </button>

              <button className="w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center">
                🛒
              </button>

            </div>
          </div>


          {/* Product Information */}
          <div className="flex flex-col gap-2 px-2">

            {/* Product Name */}
            <h3 className="text-base font-medium leading-5 truncate">
              Product Name
            </h3>

            {/* Price */}
            <span className="text-base font-semibold">
              ₦120,000
            </span>

            {/* Rating */}
            <div className="flex items-center gap-2">

              <div className="flex text-[#FFAD33]">
                ★★★★★
              </div>

              <span className="text-sm text-[#7B7B7B]">
                (43)
              </span>

            </div>

          </div>

        </div>
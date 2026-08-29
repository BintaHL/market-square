import axios from "axios"
import { EyeIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

async function getProducts(): Promise<FakeStoreProduct[]> {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    const data = res.data;

    return data

  } catch (error) {
    console.error("Failed to Fetch Data", error);
    return [];
  }
}


const Product = async () => {
  const products = await getProducts();

  return (
    <div className="w-[80%] mx-auto my-20">

      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="bg-primary h-10 w-5 rounded-sm"></div>
          <p className="text-primary">Top Products</p>
        </div>

        <h2>Flash Sales</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="w-full min-w-0 flex flex-col gap-4 shadow- shadow-grayish border rounded-sm">

              {/* 1. START RELATIVE PREVIEW CONTAINER */}
              <div className="group relative w-full aspect-[1/0.82] bg-card-bg flex flex-col items-center justify-center overflow-hidden">

                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1000}
                  height={50}
                  className="w-[65%] h-[75%] object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {/* Absolute Actions Panel (Now safely nested inside the relative container) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="w-8.5 h-8.5 flex items-center justify-center bg-light rounded-full shadow-sm"
                  >
                    <HeartIcon className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    aria-label="View product"
                    className="w-8.5 h-8.5 flex items-center justify-center bg-light rounded-full shadow-sm"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Hover Actions Panel Overlay (Now safely nested inside the relative container) */}
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
                    href={`/products/${product.id}`}
                    aria-label="View product details"
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
                    aria-label="Add to cart"
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
              {/* 2. END RELATIVE PREVIEW CONTAINER (Moved down past hover layers) */}


              {/* Product Metadata Information */}
              <div className="px-2 flex flex-col gap-1">
                <h3 className="font-medium text-base truncate">{product.title}</h3>
                <span className="text-base font-semibold text-red-600">₦{product.price.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between px-2 pb-3">
                <span className="text-sm text-orange-300 font-semibold">★ {product.rating.rate}</span>
                <span className="text-dark-muted text-sm leading-5">({product.rating.count})</span>
              </div>

            </div>
          ))}
        </div>

        
      </div>
      <div className="flex items-center justify-center mt-10">
        <button className="bg-primary text-white p-2 px-3 rounded-sm hover:text-white hover:bg-primary-hover">
          <Link
            // href={`/products?category=${categoryName}`} 
            href={`/shop`}
            className=''>
            <span>View All Products </span>
          </Link>
        </button>
      </div>
      <div className="w-full h-0.5 bg-card-bg mt-15"></div>
    </div>
  )
}

export default Product
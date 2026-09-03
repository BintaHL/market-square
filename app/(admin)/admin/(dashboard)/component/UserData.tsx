// 'use client'
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import { FaLeftLong } from 'react-icons/fa6';
// import { IoNotificationsCircleOutline } from 'react-icons/io5';

// interface Product {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   category:string;
//   price:number;
//   discountPercentage:number;
//   rating: number;
//   stock:number;
// }

// const UserData = () => {
//     const [loader, setLoader] = useState<boolean>(true);
//     const [category, setCategory] = useState<Product[]>([]);

//     useEffect(() => {
//         fetch('https://dummyjson.com/products/category')
//         .then(res => res.json())
//         .then(data => {
//             setCategory(data);
//             setLoader(false);
//         });
//     },[]);

//     if(loader) return <h3>Data loading...</h3>
//   return (
//     <div className='flex min-h-screen flex-col items-center bg-gray-100 justify-center space-y-6 dark:bg-[#102A43] dark:text-white'>
//         <div className="sticky top-0 z-20 w-full bg-white border-b border-[#d5d5d5] px-5 flex items-center justify-between">
//             <h2 className="text-[22px] font-bold py-6">Dashboard</h2>
//             <div className="flex items-center gap-3">
//                 <div className='flex items-center cursor-pointer'>
//                     <Link href="/admin/products">
//                     <FaLeftLong className='text-primary inline mr-2' />
//                     Back to Home</Link>
//                 </div>
//                 <IoNotificationsCircleOutline className="w-10 h-10"/>
//             </div>
//         </div>
//         <div className="overflow-x-auto shadow-md rounded-lg mb-10">
//             <div className="flex flex-wrap gap-2">
//                 {category?.map((cate) => (
//                     <p key={cate.category} className="px-3 py-1 bg-[#067a6c] text-white text-xs font-medium rounded-full tracking-tight">
//                     {cate.category}
//                     </p>
//                 ))}
//             </div>
//             <p>Do things for people and dont leave them with a memory of pain</p>
//         </div>
//     </div>
//   );
// };

// export default UserData;

// 'use client'
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import { FaLeftLong } from 'react-icons/fa6';
// import { IoNotificationsCircleOutline } from 'react-icons/io5';

// // 1. Define the structure for the API's base Category object
// interface APICategory {
//   slug: string;
//   name: string;
//   url: string;
// }

// // 2. Extend it to hold your local item total count
// interface CategoryWithCount extends APICategory {
//   totalItems: number;
// }

// const UserData = () => {
//     const [loader, setLoader] = useState<boolean>(true);
//     const [categories, setCategories] = useState<CategoryWithCount[]>([]);

//     useEffect(() => {
//         // FIXED: Pointed to the actual /products/categories JSON endpoint
//         fetch('https://dummyjson.com')
//         .then(res => {
//             if (!res.ok) throw new Error("Failed to fetch categories list");
//             return res.json();
//         })
//         .then(async (data: APICategory[]) => {
            
//             // Fetch total items using clean manually structured URLs to avoid broken strings
//             const categoriesWithCounts = await Promise.all(
//                 data.map(async (cate) => {
//                     try {
//                         const safeUrl = `https://dummyjson.com{category.slug}?limit=1`;
//                         const res = await fetch(safeUrl);
//                         if (!res.ok) return { ...cate, totalItems: 0 };
                        
//                         const categoryData = await res.json();
//                         return {
//                             ...cate,
//                             totalItems: categoryData.total || 0 
//                         };
//                     } catch (err) {
//                         console.error(`Error fetching total for ${cate.slug}:`, err);
//                         return { ...cate, totalItems: 0 }; // Gracefully fallback instead of crashing everything
//                     }
//                 })
//             );

//             setCategories(categoriesWithCounts);
//             setLoader(false);
//         })
//         .catch(err => {
//             console.error("Failed to load categories:", err);
//             setLoader(false);
//         });
//     }, []);

//     if(loader) return <h3>Data loading...</h3>
    
//     return (
//     <div className='flex min-h-screen flex-col items-center bg-gray-100 justify-center space-y-6 dark:bg-[#102A43] dark:text-white'>
//         <div className="sticky top-0 z-20 w-full bg-white border-b border-[#d5d5d5] px-5 flex items-center justify-between">
//             <h2 className="text-[22px] font-bold py-6">Dashboard</h2>
//             <div className="flex items-center gap-3">
//                 <div className='flex items-center cursor-pointer'>
//                     <Link href="/admin/products">
//                     <FaLeftLong className='text-primary inline mr-2' />
//                     Back to Home</Link>
//                 </div>
//                 <IoNotificationsCircleOutline className="w-10 h-10"/>
//             </div>
//         </div>
//         <div className="h-scrren overflow-x-auto shadow-md rounded-lg mb-10 max-w-2xl p-6 bg-white dark:bg-gray-800">
//             <div className="flex flex-wrap gap-2">
//                 {categories.map((cate) => (
//                     <p key={cate.slug} className="px-3 py-1 bg-[#067a6c] text-white text-xs font-medium rounded-full tracking-tight">
//                         {cate.name} ({cate.totalItems})
//                     </p>
//                 ))}
//             </div>
//             <p className="mt-4 text-sm text-gray-500 italic">Do things for people and dont leave them with a memory of pain</p>
//         </div>
//     </div>
//   );
// };

// export default UserData;

// "use client";

// import axios from "axios";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// // 💡 Update: Changed state to accept plain strings since FakeStoreAPI returns strings
// const CategoriesPage = () => {
//   const [categories, setCategories] = useState<string[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getCategories = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);

//         // Fetching the plain string array from FakeStoreAPI
//         const res = await axios.get<string[]>(
//           "https://fakestoreapi.com/products/categories"
//         );

//         console.log("Categories status:", res.status);
//         console.log("Categories:", res.data);

//         setCategories(res.data);
//       } catch (error) {
//         console.error("Failed to Fetch Categories", error);
//         setError("Failed to load categories. Please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     getCategories();
//   }, []);

//   // Loading State
//   if (isLoading) {
//     return (
//       <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-8" />

//           <div className="flex flex-col gap-4 pr-4">
//             {[...Array(4)].map((_, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between p-2"
//               >
//                 <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
//                 <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     );
//   }

//   // Error State
//   if (error) {
//     return (
//       <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
//         <div className="max-w-4xl mx-auto text-center">
//           <p className="text-red-500 font-medium mb-4">{error}</p>

//           <button
//             onClick={() => window.location.reload()}
//             className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary-hover"
//           >
//             Try Again
//           </button>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
//       <div className="max-w-4xl mx-auto">
//         <h4 className="text-gray-800 tracking-tight mb-4 text-nowrap pr-2 font-semibold text-2xl">
//           Shopping category
//         </h4>

//         {/* Categories Link List */}
//         {/* 💡 Note: Changed flex-row to flex-wrap so the square blocks don't break layout on mobile */}
//         <div className="flex flex-wrap gap-4 pr-4">
//           {categories.map((category) => (
//             <Link
//               key={category} // 💡 Now valid because category is a unique string
//               href={`/admin/category`}
//               className="hover:text-primary transition-all duration-200 group text-left"
//             >
//               {/* 💡 Removed totalItems since FakeStoreAPI doesn't provide item counts */}
//               <div className="font-semibold capitalize text-gray-800 w-37.5 h-37.5 border-2 border-primary text-center flex justify-center items-center p-4 hover:bg-primary/5 rounded-md">
//                 {category}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default CategoriesPage;


"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface APICategory {
  slug: string;
  name: string;
  url: string;
}

interface CategoryWithCount {
  name: string;
  totalItems: number;
}

// 💡 Define a type matching what fakestoreapi.com returns for an individual product
interface Product {
  id: number;
  title: string;
  category: string;
}

const CategoriesPage = () => {
  const [categories, setCategories] = useState<CategoryWithCount[]>([]);
  const [totalProductsCount, setTotalProductsCount] = useState<number>(0); // 👈 Track grand total
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const getCategoriesAndCounts = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // 1. Fetch data concurrently
      const [categoriesRes, productsRes] = await Promise.all([
        axios.get<string[]>("https://fakestoreapi.com/products/categories"),
        axios.get<Product[]>("https://fakestoreapi.com/products")
      ]);

      // 2. SAFETY CHECK: Ensure data is an array before processing
      const rawCategories = Array.isArray(categoriesRes.data) ? categoriesRes.data : [];
      const allProducts = Array.isArray(productsRes.data) ? productsRes.data : [];

      // Set global count
      setTotalProductsCount(allProducts.length);

      // 3. This will now never crash because rawCategories is guaranteed to be an array
      const mappedCategories: CategoryWithCount[] = rawCategories.map((catString) => {
        const count = allProducts.filter(
          (product) => product && product.category === catString
        ).length;

        return {
          name: catString,
          totalItems: count
        };
      });

      setCategories(mappedCategories);
    } catch (error) {
      console.error("Failed to Fetch Data", error);
      setError("Failed to load categories. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  getCategoriesAndCounts();
}, []);

  // Loading State
  if (isLoading) {
    return (
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-8" />
          <div className="flex flex-col gap-4 pr-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-2">
                <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Error State
  if (error) {
    return (
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500 font-medium mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-4 py-2 rounded-sm hover:bg-primary-hover"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex  items-center mb-6 gap-10">
          <h4 className="text-gray-800 tracking-tight text-nowrap pr-2 font-semibold text-2xl">
            Products category
          </h4>
          
          {/* Global Count Badge */}
          <span className="text-xs font-bold px-3 text-[18px] py-2 text-black border-2 border-primary rounded-md">
            Total Inventory: {totalProductsCount} items
          </span>
        </div>

        {/* Categories Link List */}
        <div className="flex flex-row gap-10">
            {categories.map((category) => (
            <Link
                key={category.name}
                // 👈 Dynamically injects the category name into the URL slug
                href={`/admin/category/${encodeURIComponent(category.name)}`}
                className="hover:text-primary transition-all duration-200 group text-left"
            >
                <div className="font-semibold capitalize text-gray-800 w-37.5 h-37.5 border-2 bg-white border-primary text-center flex flex-col justify-center items-center p-4 hover:bg-primary/5 rounded-md gap-1">
                <span>{category.name}</span>
                <span className="text-xs text-gray-500 font-normal group-hover:text-primary">
                    ({category.totalItems} items)
                </span>
                </div>
            </Link>
            ))}
        </div>
      </div>
    </main>
  );
};

export default CategoriesPage;
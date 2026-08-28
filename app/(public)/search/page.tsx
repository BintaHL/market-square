// "use client"
// import { Input } from '@/components/ui/input'
// import { SearchIcon } from 'lucide-react';
// import Link from 'next/link';
// import React, { useState, useEffect, ChangeEvent } from 'react'

// // 1. Explicitly typed structure for the API response
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
// }

// const Search = () => {
//   // 2. Strongly typed state variables
//   const [value, setValue] = useState<string>('')
//   const [products, setProducts] = useState<Product[]>([])

//   // 3. Fetch data once when the component mounts instead of on every keystroke
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products')
//         const data: Product[] = await response.json()
//         setProducts(data)
//       } catch (error) {
//         console.error("Failed to fetch products:", error)
//       }
//     }
//     fetchProducts()
//   }, [])

//   // 4. Properly typed change event
//   const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value)
//   }

//   // 5. Filter products safely using lowercase comparison for better matching
//   const filteredSuggestions = products
//     .filter((item) => {
//       const searchTerm = value.toLowerCase()
//       const itemTitle = item.title.toLowerCase()
//       return (
//         searchTerm && 
//         itemTitle.includes(searchTerm) && 
//         itemTitle !== searchTerm
//       )
//     })
//     .slice(0, 5)

//   return (
//     <div className="max-w-md mx-auto p-4 space-y-1">
//       {/* <p className="text-lg font-semibold">The search page</p> */} 
//       <div className="flex  relative">
//         {/* 6. Replaced standard input with your shadcn/ui Input component */}
//         <Input 
//           type="text" 
//           onChange={onChange} 
//           value={value} 
//           placeholder="Search products..."
//           className="bg-amber-50 border-2 border-amber-950"
//         />
//         <button className="px-4 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition">
//           <SearchIcon />
//         </button>
//       </div>

//       {/* Suggestions Dropdown */}
//       <div className="mt-1 border border-gray-200 rounded-md shadow-sm bg-white overflow-hidden">
//         {filteredSuggestions.map((product) => (
//           <div 
//             key={product.id} 
//             onClick={() => setValue(product.title)}
//             className="p-3 cursor-pointer hover:bg-amber-100 border-b last:border-b-0 border-gray-100 transition-colors text-sm text-gray-700"
//           >
//             <Link href={`/products/${product.id}`}>
//               {product.title}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Search

'use client'
import { Input } from '@/components/ui/input'
import React, { useState, useEffect, ChangeEvent } from 'react'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link';
import {useRouter } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Search = () => {
  const [value, setValue] = useState<string>('')
  const [products, setProducts] = useState<Product[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data: Product[] = await response.json()
        setProducts(data)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }
    fetchProducts()
  }, [])

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  // 1. Handle what happens when an item is selected
  const handleSelectProduct = (id: Product) => {
    router.push(`/products/${id}`)
  }

  const filteredSuggestions = products
    .filter((item) => {
      const searchTerm = value.toLowerCase()
      const itemTitle = item?.title?.toLowerCase() || ''
      return (
        searchTerm && 
        itemTitle.includes(searchTerm)
      )
    })
    .slice(0, 5)

  return (
    <div className="max-w-md mx-auto">
      <div className="relative flex items-center w-full">
        <Input 
          type="text" 
          onChange={onChange} 
          value={value} 
          placeholder="Search products..."
          className="border-2 border-gray-400 focus-visible:ring-amber-500 rounded-sm" 
        />
        <SearchIcon className="absolute h-4 w-4 ml-60 bg-red-400 text-gray-400 pointer-events-none justify-end" />
      </div>

      {/* Suggestions Dropdown */}
      {filteredSuggestions.length > 0 && (
        <div className="border border-gray-200 rounded-md shadow-lg bg-white overflow-hidden z-10 relative">
          {filteredSuggestions.map((item) => (
            <div 
              key={item.id} 
              // 3. Attach the selection handler
              onClick={() => handleSelectProduct(item.id)}
              className="p-3 cursor-pointer hover:bg-amber-50 border-b last:border-b-0 border-gray-100 transition-colors text-sm text-gray-700"
            >
              <Link href={`/products/${item.id}`}>
              {item.title}
             </Link>

            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
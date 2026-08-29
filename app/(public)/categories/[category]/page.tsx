import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

// Next.js automatically injects route params into the component props
interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

async function getCategoryProducts(category: string): Promise<Product[]> {
  // 1. Clean and decode the incoming parameter
  const decodedCategory = decodeURIComponent(category);
  
  // 2. Build the correct FakeStoreAPI sub-route and re-encode it for the web request
  // const apiEndpoint = `https://fakestoreapi.com{encodeURIComponent(decodedCategory)}`;
  const apiEndpoint = `https://fakestoreapi.com/products/category/${encodeURIComponent(decodedCategory)}`;
  
  const res = await fetch(apiEndpoint);
  
  if (!res.ok) {
    throw new Error(`Failed to fetch items for category: ${decodedCategory}`);
  }
  
  return res.json();
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  // Resolve params if using Next.js 15 asynchronous paradigm
  const resolvedParams = await params;
  const currentCategory = decodeURIComponent(resolvedParams.category);
  const products = await getCategoryProducts(resolvedParams.category);

  return (
    <main className="sm:min-h-15 md:min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-40">
      <div className="max-w-7xl mx-auto">
        {/* Back Link and Header */}
        <div className="mb-8">
          <Link href="/shop" className="text-sm font-medium text-primary hover:text-green-600 mb-4 inline-block">
            &larr; Back to shop
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 capitalize border-l-4 border-primary pl-3">
            {currentCategory}
          </h1>
        </div>

        {/* Product Cards Layout Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-white group-hover:opacity-75 h-48 w-full flex items-center justify-center p-2">
                    <Image
                    src={product.image || "https://placeholder.com"}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain max-h-20"
                    />
                </div>
              <div className="flex-1 flex flex-col justify-end pt-4 space-y-2">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px]">
                  {product.title}
                </h3>
                <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                <Link href={`/products/${product.id}`} className='text-primary decoration-2 underline-offset-4 underline hover:text-green-600'>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// import React from 'react'
// import Hero from '../../components/Hero'

// const getCategoryProducts = () => {
//   return (
//     <div className='w-full mt-35'>
//       <div className='container flex justify-between mx-auto'>
//         <div className='w-full flex flex-col md:flex-row justify-between gap-10'>
//           <div className='min-h-screen mt-50 pt-50'>
//             <p>Category section</p>
//             <Hero />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default getCategoryProducts

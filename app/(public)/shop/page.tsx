import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Product {
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

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-30">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="border-b border-gray-200 pb-5">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Our Collection
          </h1>
        </header>
        <div className="mb-4">
          <Link href="/" className="text-sm font-medium text-primary hover:text-green-600 mb-4 inline-block">
            &larr; Back to Home
          </Link>
        </div>
        {Object.entries(groupedProducts).map(([categoryName, items]) => (
          <section key={categoryName} className="space-y-6">
            {/* Category Header */}
            <h2 className="text-2xl font-bold capitalize tracking-tight text-gray-800 border-l-4 border-emerald-600 pl-3">
              {categoryName}
            </h2>

            {/* Responsive Tailwind Grid */}
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {items.map((product) => (
                <div 
                  key={product.id} 
                  className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Product Image */}
                  <div className="aspect-w-1 aspect-h-1 rounded-lg bg-white group-hover:opacity-75 h-48 w-full flex items-center justify-center p-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain max-h-20"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-end pt-4 space-y-2">
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-10">
                      {product.title}
                    </h3>
                    
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                      </p>
                      <div className="flex items-center text-xs text-amber-500 bg-amber-50 px-2 py-1 rounded">
                        ★ {product.rating.rate} ({product.rating.count})
                      </div>
                    </div>
                    <Link href={`/products/${product.id}`} className='text-primary decoration-2 underline-offset-4 underline hover:text-green-600'>View Details</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
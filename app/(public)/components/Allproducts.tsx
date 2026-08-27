interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  
  const res = await fetch(`https://fakestoreapi.com/products`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) return [];
  
  return res.json();
}

// 3. Page Component
export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);

  // If the category does not exist or has no items, show a 404 page
  // if (products.length === 0) {
  //   notFound();
  // }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <p></p>
        {/* Dynamic Header */}
        <h1 className="text-3xl font-extrabold text-gray-900 capitalize mb-8 border-b border-gray-200 pb-4">
          {decodeURIComponent(slug)}
        </h1>

        {/* Tailwind Grid Layout for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100 flex flex-col justify-between"
            >
              {/* Product Image container */}
              <div className="p-6 bg-white h-64 flex items-center justify-center overflow-hidden border-b border-gray-50">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">
                    {product.title}
                  </h2>
                  
                  {/* Rating Badge */}
                  <div className="flex items-center gap-1 mt-2 text-amber-500 text-xs font-medium">
                    ⭐ {product.rating?.rate} <span className="text-gray-400">({product.rating?.count})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-lg font-bold text-gray-950">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-lg text-xs font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

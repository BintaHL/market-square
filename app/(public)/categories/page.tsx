import Link from 'next/link';

async function getCategories(): Promise<string[]> {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-gray-800 tracking-tight mb-4 text-nowrap">
          Shopping category
        </h3>
        {/* <p className="text-gray-500 mb-12">
          Select a category to view its curated collection of products.
        </p> */}

        {/* Categories Link Grid */}
        <div className="flex flex-col gap-4 sm:grid-cols-2 pr-4">
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"></div> */}
          {categories.map((category) => (
            <Link
              key={category}
              // URL encode the category name to handle special characters like spaces or punctuation safely
              href={`/categories/${encodeURIComponent(category)}`}
              className="flex items-center justify-between p-2 hover:border-b-2 hover:border-b-primary hover:text-primary transition-all duration-200 group text-left"
            >
              <span className="font-semibold capitalize text-gray-800">
                {category}
              </span>
              <span className="text-xl text-gray-400 hover:text-primary transform group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
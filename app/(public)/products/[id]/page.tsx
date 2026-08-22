// import React from 'react';
// import axios from 'axios';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Product } from '../../products/page'; 

// interface PageProps {
//   params: Promise<{ id: string }>; 
// }

// // console.log("The current id is ", id)
// async function getSingleProduct(id: string): Promise<Product | null> {
//   try {
//     const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error('Failed to fetch product details:', error);
//     return null;
//   }
// }

// export default async function ProductDetailsPage({ params }: PageProps) {
//   const { id } = await params;
//   const product = await getSingleProduct(id);

//   if (!product) {
//     return (
//       <div className='p-10'>
//         <p>Product not found.</p>
//         <Link href="/dashboard/products">← Back to Products</Link>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className='mt-12 items-center w-full flex flex-col'>
//         <div className='ml-20 mr-20'>
//           <p className='text-[#666] text-2xl'>
//             Category: 
//           </p>
//           <h1 className='mt-10'>{product.name}</h1>

//           <div className='text-center mt-5'>
//             <Image 
//               src={product?.image || ""} 
//               alt={product.name} 
//               width={50} 
//               height={50} 
//               style={{ objectFit: 'contain' }}
//               priority 
//             />
//           </div>

//           <h2 className='text-[#222] mt-3'>${product.price}</h2>
//           <p className='space-y-1.6 text-[#444] mt-8 pb-8'>
            
//           </p>
//           <Link href="/products/" className='bg-orange-500 text-white p-1 rounded-lg'
//             >Back to Products</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const Productid = () => {
  return (
    <div>
      
    </div>
  )
}

export default Productid

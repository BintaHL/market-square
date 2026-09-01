// 'use client'
// import { Button } from '@/components/ui/button';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import axios from 'axios';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'
// import BackButton from '../component/BackButton';
// import ProductPagination from '../products/productPagination';
// // import ThemeToggler from '../component/ThemeToggler'

// export interface Product {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     category: string;
//     discountPercentage:number;
//     rating:number;
//     stock:number;
//     availabilityStatus:string;
//     images:string[];
//     shippingInformation:string;
// }

// const Products = () => {
// const [products, setProducts] = useState<Product[]>([]);

// useEffect(() => {
//     async function FetchProducts(){
//     try{
//         const response = await axios.get('https://dummyjson.com/products');
//         setProducts(response.data.products)
//     } catch(error){
//         if (axios.isAxiosError(error)){
//             console.error(error.message);
//         } else {
//             console.error("An unexpected error occurred", error)
//         }
//     }
// }
// FetchProducts();
// }, []);
                    
// // const isLow = Products.availabilityStatus?.toLowercase() === 'low';

//   return (
//     <div className='dark:bg-[#102A43] dark:text-white pt-10'>
//     <div className='px-5 mt-8'>
//       <h3 className='text-2xl font-semibold text-center'>
//         List of All Products 
//       </h3>
//       {/* <ThemeToggler /> */}
//      <div className='flex justify-end'> <BackButton text="Go Back" link='/admin/products'/></div>
//       <Table>
//         {/* <TableCaption>A list of recent products</TableCaption> */}
//             <TableHeader>
//                     <TableHead isRowHeader>No.</TableHead>
//                     <TableHead className='text-center'>Product Pictures</TableHead>
//                     <TableHead>Product Details
//                     </TableHead>
//             </TableHeader>
//             <TableBody>
//                 { products.map((product) =>(
//                     <TableRow key={product.id}>
//                         <TableCell>{product.id}</TableCell>
//                         <TableCell className='flex justify-center item-center my-1 mx-auto'>
//                             <div className='flex items-center justify-center'>
//                                 {product.images.map((index)=> (
//                                     <Image key={index} src={index} alt="Image" width={100} height={50} className='mt-5'/>
//                                 ))}
//                             </div>
//                         </TableCell>
//                         <TableCell className='item-right'>
//                                 <TableRow className='border-none'>
//                                     <TableCell className='font-semibold'>Name</TableCell>
//                                     <TableCell>{product.title}</TableCell>
//                                 </TableRow>
//                                 <TableRow className='border-none'>
//                                     <TableCell className='font-semibold'>Price</TableCell>
//                                     <TableCell>{product.price}</TableCell>
//                                 </TableRow>
//                                 <TableRow className='border-none'>
//                                     <TableCell className='font-semibold'>Category</TableCell>
//                                     <TableCell>{product.category}</TableCell>
//                                 </TableRow>
//                                 <TableRow className='border-none'>
//                                     <TableCell className='font-semibold'>Stock</TableCell>
//                                     <TableCell>{product.stock}</TableCell>
//                                 </TableRow>
                       
//                                 <TableRow className='border-none'>
//                                     <TableCell className='font-semibold'>Product description</TableCell>
//                                     <TableCell className=''>{product.description.split(' ').slice(0, 8).join(' ') + '...'}</TableCell>
//                                 </TableRow>
//                                 <TableRow className='flex'>
//                                     {/* Commented Code takes to the edit page of a single item */}
//                                     <Link href={`products/edit/${product.id}`}></Link>
//                                     <TableCell><Link href={`products/details/${product.id}`}>
//                                     <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold
//                                     py-2 px-4 rounded text-xs'>More Details</Button></Link></TableCell>
//                                 </TableRow>
//                         </TableCell>
                        
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//         <ProductPagination />
//     </div>
//     </div>
//   )
// }

// export default Products

'use client'
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import BackButton from '../component/BackButton';
import ProductPagination from '../products/productPagination';
import { IoNotificationsCircleOutline } from 'react-icons/io5';
import { BiRightArrow } from 'react-icons/bi';
import { FaLeftLong } from 'react-icons/fa6';

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    availabilityStatus: string;
    images: string[];
    shippingInformation: string;
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function FetchProducts() {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                setProducts(response.data.products);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error(error.message);
                } else {
                    console.error("An unexpected error occurred", error);
                }
            }
        }
        FetchProducts();
    }, []);

    return (
        <>
            <div className="sticky top-0 z-20 w-full bg-white border-b border-[#d5d5d5] px-5 flex items-center justify-between">
            <h2 className="text-[22px] font-bold py-6">List of All Products</h2>
            <div className="flex items-center gap-3">
                {/* <Field className="max-w-sm">
                <InputGroup>
                    <InputGroupInput id="inline-start-input" placeholder="Search..." />
                    <InputGroupAddon align="inline-end">
                    <SearchIcon className="text-muted-foreground" />
                    </InputGroupAddon>
                </InputGroup>
                </Field> */}
                <div className='flex items-center gap-2 cursor-pointer'><FaLeftLong className='text-primary inline' />Back to Home</div>
                <IoNotificationsCircleOutline className="w-10 h-10"/>
            </div>
            </div>
            <div className='dark:bg-[#102A43] dark:text-white pt-1 bg-gray-100'>
                <div className='px-5 mt-2'>
                {/* <h3 className='text-2xl font-semibold text-center'>
                    List of All Products
                </h3>
                <div className='flex justify-end'>
                    <BackButton text="Go Back" link='/admin/products' />
                </div> */}
                
                {/* FIX 1: Use the built-in `items` prop loop instead of mapping arrays manually inside */}
                <Table aria-label="List of All Products">
                    <TableHeader className='bg-primary rounded-lg'>
                        <TableHead isRowHeader className='text-white font-semibold text-[18px] p-3'>No.</TableHead>
                        <TableHead className='text-center text-white font-semibold text-[18px] p-3'>Product Pictures</TableHead>
                        <TableHead className='text-white font-semibold text-[18px] p-3'>Product Details</TableHead>
                    </TableHeader>
                    <TableBody items={products} className='bg-white'>
                        {(product) => (
                            <TableRow id={String(product.id)}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell className='flex justify-center items-center my-1 mx-auto'>
                                    <div className='flex flex-wrap gap-2 items-center justify-center'>
                                        {/* Fallback to make sure array items exist safely */}
                                        {product.images && product.images.map((imgSrc, idx) => (
                                            <Image key={idx} src={imgSrc} alt="Image" width={100} height={50} className='mt-5 object-contain' />
                                        ))}
                                    </div>
                                </TableCell>
                                
                                <TableCell>
                                    {/* FIX 2: Replaced the forbidden inner TableRows with a clean, grid-based standard HTML <div> layout */}
                                    <div className="flex flex-col gap-2 text-sm text-left">
                                        <div className="flex"><span className="font-semibold w-36">Name:</span> <span>{product.title}</span></div>
                                        {/* <div className="flex"><span className="font-semibold w-36">Price:</span> <span>${product.price}</span></div> */}
                                        <div className="flex"><span className="font-semibold w-36">Category:</span> <span>{product.category}</span></div>
                                        <div className="flex"><span className="font-semibold w-36">Stock:</span> <span>{product.stock}</span></div>
                                        {/* <div className="flex">
                                            <span className="font-semibold w-36">Product description:</span> 
                                            <span>{product.description.split(' ').slice(0, 8).join(' ') + '...'}</span>
                                        </div> */}
                                        <div className="pt-2">
                                            <Link href={`products/details/${product.id}`}>
                                                <Button className=' hover:bg-primary-hover text-white font-bold py-2 px-4 rounded text-xs'>
                                                    More Details
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <ProductPagination />
            </div>
        </div>
        </>
    )
}

export default Products;

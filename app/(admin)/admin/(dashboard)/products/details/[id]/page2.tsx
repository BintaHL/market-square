// 'use client'
// import React, { useEffect, useState } from 'react'
// import BackButton from '../../../component/BackButton'
// import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from '@/components/ui/field'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Button } from '@/components/ui/button'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { Controller, useForm } from 'react-hook-form'
// import axios from 'axios'

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
//    shippingInformation:string;
//     brand:string;
// }

// interface PageProps {
//   params: Promise<{ id: string}>;
// }


// async function getSingleProduct(id:string): Promise<Product | null> {
//   try{
//       const response = await axios.get(`https://dummyjson.com/products/${id}`);
//       return (response.data.products)
//   } catch(error){
//       if (axios.isAxiosError(error)){
//           console.error(error.message);
//       } else {
//           console.error("An unexpected error occurred", error)
//       }
//   }
// }

// const formSchema = z.object({
//     name:z.string().min(2, 'Product name must be at least 3 characters.'),
//     category:z.string().min(2, 'Category must be at least 5 characters.'),
//     description:z.string().min(10, 'Product description must be at least 10 characters.'),
//     brand:z.string().min(3, 'Brand must be at least 3 characters.'),
// });

// type FormValues = z.infer<typeof formSchema>;



// export async function EditProducts({ params }: PageProps){
//     // const [loading, setLoading] = useState(true)
//     const { id } = await params;
//     // const product = Products?.find((product: { id:any }) => product.id === params.id);
//     const product = await getSingleProduct(id);
//     console.log(product)

//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//          defaultValues: {
//           name: product?.title || '', 
//             category: product?.category || '', 
//             description: product?.description || '', 
//             brand: product?.brand || ''
//         },
//     });

//     // const form = useForm<FormValues>({
//     //     resolver: zodResolver(formSchema),
//     //     defaultValues: {
//     //         name: product?.title || '', 
//     //         category: product?.category || '', 
//     //         description: product?.description || '', 
//     //         brand: product?.brand || ''},
//     // });

// //     useEffect(() => {

// //     async function FetchSingleProduct(){
// //     try{
// //         const response = await axios.get('https://dummyjson.com/products');
// //         const productList: Product[] = response.data.products;

// //         const foundProduct = productList.find((product: { id:any }) => product.id === params.id);
// //         if (foundProduct){
// //             setProduct(foundProduct);
// //             form.reset({
// //                 name:foundProduct.title,
// //                 category:foundProduct.category,
// //                 description:foundProduct.description,
// //                 brand:foundProduct.brand || '',
// //             });
// //         } catch (error) {
// //             if (axios.isAxiosError(error)){

// //             }
// //         }
// //     } catch(error){
// //         if (axios.isAxiosError(error)){
// //             console.error(error.message);
// //         } else {
// //             console.error("An unexpected error occurred", error)
// //         }
// //     }
// // }
// // FetchSingleProduct();
// // }, []);

//     function onSubmit(data: FormValues){
//         console.log(data);
//     }

//   return (
//     <div className='flex mni-h-screen flex-col items-center justify-center p-6 space-y-12'>
//       <div className=''><BackButton text='Back to Products' link='/admin/products'/></div>
//         <div className='w-full max-w-md border rounded-2xl p-6 shadow-sm'>
//             <h2 className='text-xl font-semibold mb-4 text-center'>New Products</h2>
//             <form onSubmit={form.handleSubmit(onSubmit)}>
//                 <FieldSet>
//                     <FieldLegend>Product Information</FieldLegend>
//                     <FieldDescription>This information will appear on new products category</FieldDescription>
//                     <FieldGroup>
//                         <Controller name="name" control={form.control} render={({ field, fieldState }) => (
//                             <Field data-invalid={fieldState.invalid}>
//                                 <FieldLabel htmlFor="name">Product</FieldLabel>
//                                 <Input id="name" {...field} placeholder="Product" aria-invalid={fieldState.invalid} />
//                                 {fieldState.invalid && (
//                                     <FieldError errors={[fieldState.error]} />
//                                 )}
//                             </Field>
//                         )} />

//                         <Controller name="category" control={form.control} render={({ field, fieldState }) => (
//                             <Field data-invalid={fieldState.invalid}>
//                                 <FieldLabel htmlFor="category">Category</FieldLabel>
//                                 <Input id="category" {...field} placeholder="Category" data-invalid={fieldState.invalid}/>
//                                 {fieldState.invalid && (
//                                     <FieldError errors={[fieldState.error]} />
//                                 )}
//                             </Field>
//                         )} />

//                         <Controller name="description" control={form.control} render={({ field, fieldState }) => (
//                             <Field data-invalid={fieldState.invalid}>
//                                 <FieldLabel htmlFor="name">Description</FieldLabel>
//                                <Textarea id="description" {...field} placeholder='Product details' data-invalid={fieldState.invalid}/>
//                                {fieldState.invalid && (
//                                     <FieldError errors={[fieldState.error]} />
//                                 )}
//                             </Field>
//                         )} />
//                     </FieldGroup>
//                 </FieldSet>
//                 <FieldSeparator />
//                 <FieldGroup>
//                     <Controller name="brand" control={form.control} render={({ field, fieldState }) => (
//                         <Field data-invalid={fieldState.invalid}>
//                             <FieldLabel htmlFor="brand">Brand</FieldLabel>
//                             <Input id="brand" {...field} placeholder="Product Brand" aria-invalid={fieldState.invalid}/>
//                             {fieldState.invalid && (
//                                     <FieldError errors={[fieldState.error]} />
//                                 )}
//                         </Field>
//                         )} />
//                 </FieldGroup>
//                 <div className='flex justify-center'><Button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mt-4'>Add Product</Button></div>
//             </form>
//         </div>
//     </div>
//   )
// }

import React from 'react'

const EditPage = () => {
  return (
    <div>
      <p>Edit</p>
    </div>
  )
}

export default EditPage

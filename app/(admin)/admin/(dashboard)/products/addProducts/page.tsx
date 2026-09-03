'use client'
import React from 'react'
import { Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
// import { toast } from '@/components/ui/toast'
import z from 'zod/v3'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { IoNotificationsCircleOutline } from 'react-icons/io5'
import { FaLeftLong } from 'react-icons/fa6'
import Link from 'next/link'


const formSchema = z.object({
    name:z.string().min(2, 'Product name must be at least 3 characters.'),
    category:z.string().min(2, 'Category must be at least 5 characters.'),
    description:z.string().min(10, 'Product description must be at least 10 characters.'),
    brand:z.string().min(3, 'Brand must be at least 3 characters.'),
});
type FormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
    backHref: string;
}

export const ProductForm = ({ backHref }: ProductFormProps) => {
    // const { toast } = toast();

      const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {name: "", category: "", description:"", brand:""},
    });

    function onSubmit(data: FormValues){
        console.log(data);
    }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center space-y-6 dark:bg-[#102A43] dark:text-white'>
        <div className="sticky top-0 z-20 w-full bg-white border-b border-[#d5d5d5] px-5 flex items-center justify-between">
            <h2 className="text-[22px] font-bold pb-6">Add New Products</h2>
            <div className="flex items-center gap-3">
                <div className='flex items-center cursor-pointer'>
                    <Link href={backHref}>
                    <FaLeftLong className='text-primary inline mr-2' />
                    Back to Home</Link>
                </div>
                <IoNotificationsCircleOutline className="w-10 h-10"/>
            </div>
        </div>
            <div className='w-full max-w-md border-2 pb-4 shadow-sm mb-6 rounded-lg'>
                <h2 className='text-xl font-semibold mb-4 p-2 text-white text-center bg-primary'>New Products</h2>
                <form onSubmit={form.handleSubmit(onSubmit)} className='px-5'>
                    <FieldSet>
                        <FieldLegend className='text-[16px]'>New Product Information</FieldLegend>
                        {/* <FieldDescription>This information will appear on new products category</FieldDescription> */}
                        <FieldGroup>
                            <Controller name="name" control={form.control} render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="name" className='text-[16px]'>Product</FieldLabel>
                                    <Input id="name" {...field} placeholder="Product" aria-invalid={fieldState.invalid} />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )} />

                            <Controller name="category" control={form.control} render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="category" className='text-[16px]'>Category</FieldLabel>
                                    <Input id="category" {...field} placeholder="Category" data-invalid={fieldState.invalid}/>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )} />

                            <Controller name="description" control={form.control} render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="name" className='text-[16px]'>Description</FieldLabel>
                                <Textarea id="description" {...field} placeholder='Product details' data-invalid={fieldState.invalid}/>
                                {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )} />
                        </FieldGroup>
                    </FieldSet>
                    <FieldSeparator />
                    <FieldGroup>
                        <Controller name="brand" control={form.control} render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="brand" className='text-[16px]'>Brand</FieldLabel>
                                <Input id="brand" {...field} placeholder="Product Brand" aria-invalid={fieldState.invalid}/>
                                {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                            </Field>
                            )} />
                    </FieldGroup>
                    <div className='flex justify-center'><Button type='submit' className='hover:bg-primary-hover text-white font-bold py-2 px-4 rounded text-xs mt-4'>Add Product</Button></div>
                </form>
            </div>
    </div>    
  )
}

const AddProducts = () => <ProductForm backHref="/admin/products" />;

export default AddProducts

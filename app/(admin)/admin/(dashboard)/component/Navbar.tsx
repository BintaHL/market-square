import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='text-black bg-white dark:bg-slate-700 dark:text-white py-2 px-5 flex justify-between h-20'>
      <h3 className='font-bold'><Link href="/">CARTS</Link></h3>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    </div>
  )
}

export default Navbar
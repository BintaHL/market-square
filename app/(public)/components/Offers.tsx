import { Gift } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Offers = () => {
  return (
    <div>
      <Link href={"/shop"} className='hidden lg:flex items-center gap-2.5 justify-end group'>
        <Gift className='w-6 h-6 hover:bg-amber-600' />
        <div className='flex flex-col'>
            <h4 className='font-bold'>Shop</h4>
            <p>Latest Offers</p>
        </div>
      </Link>
    </div>
  )
}

export default Offers

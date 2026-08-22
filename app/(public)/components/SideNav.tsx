import React from 'react'
import Category from '../category/category'

const SideNav = () => {
  return (
    <div className='flex min-h-100'>
        <div className='w-50 border-r-2 border-mist-400'>
            <Category />
        </div>
    </div>
  )
}

export default SideNav

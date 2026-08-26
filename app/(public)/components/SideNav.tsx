import React from 'react'
import Category from '../category/page'

const SideNav = () => {
  return (
    <div className='flex min-h-100'>
        <div className='w-50 border-r-accent border-r-2 '>
            <Category />
        </div>
    </div>
  )
}

export default SideNav

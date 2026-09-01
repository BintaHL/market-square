import React from 'react'
// import Category from '../category/page'
import CategoriesPage from '../categories/page'

const SideNav = () => {
  return (
    <div className='flex md:min-h-100'>
        <div className='border-r-accent border-r-2'>
            {/* <Category /> */}
            <CategoriesPage />
        </div>
    </div>
  )
}

export default SideNav

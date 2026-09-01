
import React from 'react'
import { SearchIcon } from "lucide-react"

import { IoNotificationsCircleOutline } from "react-icons/io5";
import {
  Field
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import UserData from '@/app/(user)/user/component/UserData';
import ProductTable from "./component/products/ProductTable";
import CategoriesPage from "./component/UserData";

// import ProtectedRoute from '@/app/(authentication)/components/ProtectedRoute';

const HomePage = () => {
  return (
    // <ProtectedRoute>
    <>
      <div className="min-h-screen w-full bg-white dark:bg-[#102A43] dark:text-white">
        <div className="sticky top-0 z-20 w-full bg-white border-b border-[#d5d5d5] px-5 flex items-center justify-between">
          <h2 className="text-[22px] font-bold py-6">Dashboard</h2>
          <div className="flex items-center gap-3">
            <Field className="max-w-sm">
              <InputGroup>
                <InputGroupInput id="inline-start-input" placeholder="Search..." />
                <InputGroupAddon align="inline-end">
                  <SearchIcon className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <IoNotificationsCircleOutline className="w-10 h-10" />
          </div>
        </div>

        <div className="flex flex-col px-5 bg-gray-100">
          {/* <UserData /> */}
          <CategoriesPage />
          <div className=''>
            <ProductTable title='Latest Products' limit={10} /> 
          </div>
        </div>
      </div>
    </>
    // </ProtectedRoute>
  )
}

export default HomePage
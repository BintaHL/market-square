import React from 'react'
import AnalyticsDashboard from './component/AnalyticsDashboard'
// import Image from "next/image";
import { SearchIcon } from "lucide-react"
import {
  Field
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IoNotificationsCircleOutline } from "react-icons/io5";


const Analytics = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="sticky top-0 bg-white z-20 w-full border-b border-[#d5d5d5] px-5 flex items-center justify-between">
        <h2 className="text-[22px] font-bold p-6">Analytics</h2>
         <div className="flex items-center gap-3">
          <Field className="max-w-sm">
            <InputGroup>
              <InputGroupInput id="inline-start-input" placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <SearchIcon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <IoNotificationsCircleOutline className="w-10 h-10"/>

          {/* <div className="bg-[#000000] rounded-full flex items-center justify-center gap-3">
            <Image src="/vercel.svg" alt="logo" width={15} height={15} />
          </div> */}
        </div>
      </div>
      <div className="px-5 py-4">
        <AnalyticsDashboard />
      </div>
    </div>
  )
}

export default Analytics
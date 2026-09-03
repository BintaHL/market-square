"use client"
import { CirclePlus, LogOut, PackageSearch, ShoppingCart, Users2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'
import { BiBarChart, BiHome } from "react-icons/bi"
import { LuSettings } from "react-icons/lu"
import { RiAdminFill } from "react-icons/ri"

const SideNav = () => {
  const path = usePathname()

  return (
    <aside className="h-screen w-67 shrink-0 p-5 shadow-sm shadow-[62.7% 0.194 149.214] flex flex-col sticky top-0 overflow-hidden z-50 dark:bg-green-600 dark:text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-[30px] font-bold">CARTS</h1>
        {/* <Image src="/arrow-menu-close.svg" alt="collapse" width={30} height={30} /> */}
      </div>

      <div className="mt-10 flex flex-col gap-10">
        <h3 className="text-[16px] font-semibold uppercase">Main Menu</h3>

        <div className="flex flex-col justify-between gap-40">
          <div className="flex flex-col gap-6">
            <Link
              href="/admin"
              className={`flex items-center justify-start gap-3 w-full ${path === '/admin' ? 'text-[16px] font-bold bg-primary text-[#ededed] py-2 rounded-md' : 'text-[16px] font-semibold'}`}
            >
              <BiHome className="w-6 h-6" />Dashboard
            </Link>
            <Link
              href="/admin/products"
              className={`flex items-center justify-start gap-3 w-full ${path === '/admin/products' ? 'text-[16px] font-bold bg-primary text-[#ededed] py-2 rounded-md' : 'text-[16px] font-semibold'}`}
            >
              <PackageSearch  className="w-6 h-6" />Products
            </Link>
            <Link
              href="/admin/products/addProducts"
              className={`flex items-center justify-start gap-3 w-full ${path === '/admin/new' ? 'text-[16px] font-bold bg-primary text-[#ededed] py-2 rounded-md' : 'text-[16px] font-semibold'}`}
            >
              <CirclePlus className="w-6 h-6" />Add New Products
            </Link>
            <Link
              href="#"
              className={`flex items-center justify-start gap-3 w-full ${path === '#' ? 'text-[16px] font-bold bg-primary text-[#ededed] py-2 rounded-md' : 'text-[16px] font-semibold'}`}
            >
              <ShoppingCart className="w-6 h-6" />Order Management
            </Link>
            <Link
              href="/admin/customers"
              className={`flex items-center justify-start gap-3 w-full ${path === '/admin/customers' ? 'text-[16px] font-bold bg-primary text-[#ededed] py-2 rounded-md' : 'text-[16px] font-semibold'}`}
            >
              <Users2 className="w-6 h-6" />Customers
            </Link>
            <Link
              href="/admin/analytics"
              className={`flex items-center justify-start gap-3 w-full ${path === '/admin/analytics' ? 'text-[16px] font-bold bg-primary text-[#ededed] py-2 rounded-md' : 'text-[16px] font-semibold'}`}
            >
              <BiBarChart className="w-6 h-6" />Analytics
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <hr />
            <Link href="#" className="flex items-center justify-start font-bold gap-3 w-full">
              <RiAdminFill className="w-6 h-6" />Admin
            </Link>
            <Link href="/admin/settings" className="flex items-center justify-start font-bold gap-3 w-full">
              <LuSettings className="w-6 h-6" />Settings
            </Link>
          <Link href="/" className="bg-[#ededed] rounded-sm text-center p-2 flex items-center justify-start font-bold gap-3 w-full">
              <LogOut className="w-6 h-6" />Logout
          </Link>
          </div>

        </div>
      </div>
    </aside>
  )
}

export default SideNav
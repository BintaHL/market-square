"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { RxAvatar } from "react-icons/rx"
import { LogOut, Package, User } from "lucide-react"

export function ProfileDropdownCustom() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-x-1.5 rounded-full p-1.5 bg-card-bg text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-dark-muted focus:ring-offset-2 transition-colors duration-200"
      >
        <RxAvatar size={20} />
      </button>

      {/* DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="truncate text-sm font-semibold text-gray-900">sarah.day@example.com</p>
          </div>

          <div className="py-1">
            <Link href="/profile/account" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <User className="h-4 w-4"/> Manage My Account
            </Link>
            <Link href="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <Package className="h-4 w-4"/> My Order
            </Link>
            {/* <Link href="/Checkout" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <PackageX className="h-4 w-4" /> My Cancellation
            </Link> */}
            {/* <Link href="/review" onClick={() => setIsOpen(false)} className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              <Star className="h-4 w-4"/> My Rewiews
            </Link> */}
          </div>

          <div className="border-t border-gray-100 py-1">
            <button onClick={() => console.log("Sign out logic")} className="w-full text-left flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
             <LogOut className="text-dark-muted"/> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

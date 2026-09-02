"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Package, Store, User } from "lucide-react"
import { RxAvatar } from "react-icons/rx"
import LogoutButton from "@/app/components/auth/auth/LogoutButton"

interface CurrentUser {
  id: number
  username: string
  email: string
  role: "user" | "admin" | "seller"
  seller_application?: {
    id: number
    business_name: string
    is_approved: boolean
  } | null
}

export function ProfileDropdownCustom() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<CurrentUser | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    let isMounted = true

    async function fetchUser() {
      try {
        const response = await fetch("/api/user/me", { cache: "no-store" })

        if (!response.ok) {
          if (isMounted) setUser(null)
          return
        }

        const data = await response.json()
        if (isMounted) setUser(data)
      } catch (error) {
        console.error("Failed to fetch current user", error)
        if (isMounted) setUser(null)
      }
    }

    fetchUser()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!dropdownRef.current) return

      const target = event.target as Node
      if (!dropdownRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const closeMenu = () => setIsOpen(false)

  const sellerApplication = user?.seller_application
  const isSellerRole = user?.role === "seller"
  const isAdminRole = user?.role === "admin"
  const isUserRole = user?.role === "user"

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Open profile menu"
        className="flex items-center justify-center rounded-full p-1.5 bg-card-bg text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-dark-muted focus:ring-offset-2"
      >
        <RxAvatar size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 origin-top-right overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg ring-1 ring-black/5">
          <div className="border-b border-gray-100 px-4 py-3">
            <p className="text-xs uppercase tracking-wide text-gray-500">Signed in as</p>
            <p className="truncate text-sm font-semibold text-gray-900">
              {user?.username || "Loading..."}
            </p>
          </div>

          <div className="py-1">
            <Link
              href="/account"
              onClick={closeMenu}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <User className="h-4 w-4" />
              Manage My Account
            </Link>

            <Link
              href="/cart"
              onClick={closeMenu}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
            >
              <Package className="h-4 w-4" />
              My Order
            </Link>

            {isUserRole && !sellerApplication && (
              <Link
                href="/seller/register"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <Store className="h-4 w-4" />
                Apply to Become a Seller
              </Link>
            )}

            {isUserRole && sellerApplication && !sellerApplication.is_approved && (
              <div className="flex items-center gap-2 px-4 py-2 text-sm text-yellow-700">
                <Store className="h-4 w-4" />
                Application Pending
              </div>
            )}

            {isSellerRole && (
              <Link
                href="/seller"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <Store className="h-4 w-4" />
                Seller Dashboard
              </Link>
            )}

            {isAdminRole && (
              <Link
                href="/admin"
                onClick={closeMenu}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-gray-900"
              >
                <Store className="h-4 w-4" />
                Admin Dashboard
              </Link>
            )}
          </div>

          <div className="border-t border-gray-100 bg-[#f3f4f6] p-1">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  )
}

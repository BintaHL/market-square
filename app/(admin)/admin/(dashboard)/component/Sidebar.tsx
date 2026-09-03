"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Blend, CirclePlus, Dock, LayoutDashboard, LogOut, PackageSearch, Settings, Sheet, ShoppingCart, Star, StarPlus, Store, TicketPercent, UserRound, UsersRound } from "lucide-react"
import Link from "next/link"


const Sidebar = () => {
  return (
    <Command className="max-w-sm border-r-2 rounded-t-none">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="h-auto max-h-none overflow-y-visible">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Main menu">
            <CommandItem>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <Link href='/admin'>Dashboard</Link>
            </CommandItem>
            <CommandItem>
                <ShoppingCart className="mr-2 h-4 w-4"/>
                <Link href='/'>Order Management</Link>
            </CommandItem>
            <CommandItem>
                <UsersRound className="mr-2 h-4 w-4"/>
                <Link href='/admin/customers'>Customers</Link>
            </CommandItem>
            <CommandItem>
                <TicketPercent className="mr-2 h-4 w-4"/>
                <Link href='/admin/analytics'>Analytics</Link>
            </CommandItem>
            <CommandItem>
                <Blend className="mr-2 h-4 w-4"/>
                <Link href='/'>Categories</Link>
            </CommandItem>
            <CommandItem>
                <Dock className="mr-2 h-4 w-4"/>
                <Link href='/'>Transaction</Link>
            </CommandItem>
            <CommandItem>
                <Star className="mr-2 h-4 w-4"/>
                <Link href='/'>Brand</Link>
            </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Product">
            <CommandItem>
                <CirclePlus className="mr-2 h-4 w-4" />
                <Link href='/'>Add Products</Link>
            </CommandItem>
            <CommandItem>
                <Sheet className="mr-2 h-4 w-4"/>
                <Link href='/admin/products'>Product Media</Link>
            </CommandItem>
            <CommandItem>
                <PackageSearch className="mr-2 h-4 w-4"/>
                <Link href='/admin/products'>Product List</Link>
            </CommandItem>
            <CommandItem>
                <StarPlus className="mr-2 h-4 w-4"/>
                <Link href='/'>Product Reviews</Link>
            </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Admin">
            <CommandItem>
                <UserRound className="mr-2 h-4 w-4" />
                <Link href='/'>Admin role</Link>
            </CommandItem>
            <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <Link href='/admin/settings'>Settings</Link>
            </CommandItem>
            <CommandItem className="mt-6">
                <div className="flex flex-cols">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="pl-2"><Link href='/'>Dealport</Link></p>
                </div>
                <p>admin@gmail.com</p>
                <div className="flex flex-cols">
                   <LogOut className="mr-2 h-4 w-4"/> 
                </div>
            </CommandItem>
            <CommandItem className="border-b-2">
                <Store className="mr-2 h-4 w-4"/>
                <Link href='/'>Product Reviews</Link>
            </CommandItem>
            </CommandGroup>
        </CommandList>
    </Command>
  )
}

export default Sidebar

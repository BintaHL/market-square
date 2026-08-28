'use client'
import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const searchRef = useRef<HTMLDivElement>(null);
    const [showSearch, setShowSearch] = useState(false);
    const mobileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className='relative w-full'>
        <form onSubmit={(e)=>e.preventDefault()} className='relative items-center'>
            <Input placeholder='Search...' className='flex-1 rounded-md py-5 placeholder:font-semibold'
            value={search} onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowResults(true)}/>
            {search ? (
                <X onClick={() => setSearch("")}
                className="w-5 h-5 absolute right-3 top-2.5 cursor-pointer"/>
            ) : (
                <Search className='absolute right-3 top-3 w-5 h-5'/>
            )}
        </form>
    </div>
  )
}

export default Searchbar
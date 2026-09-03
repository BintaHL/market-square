// "use client"
// import { useState, useEffect } from 'react'
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// function ThemeToggler() {
//   const [mounted, setMounted] = useState(false)
//   const { setTheme } = useTheme()

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//  if (!mounted) {
//     return (
//       <Button variant="outline" size="icon" className='bg-slate-700 hover:bg-slate-600 mr-5 p-2' disabled>
//         <Sun className="h-[1.2rem] w-[1.2rem]" />
//         <span className="sr-only">Loading theme</span>
//       </Button>
//     )
//   }
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger>
//         <Button variant="outline" size="icon" className='bg-slate-700 hover:bg-slate-600 mr-5 p-2'>
//           <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
// export default ThemeToggler;

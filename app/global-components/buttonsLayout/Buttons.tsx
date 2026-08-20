"use client"
import { useRouter } from "next/navigation"

export default function Button  () {
    // copy and edit
    const router = useRouter()
    const HandleRoute = () => router.push('/')

    return (
        <>
            <button  className="
                /* Layout & Dimensions */
                w-58.5 h-14 
                flex items-center justify-center gap-2.5
                pt-4 pr-12 pb-4 pl-12
                
                /* Borders & Opacity */
                rounded-sm opacity-100 rotate-0
                
                /* Team Customization Targets (Change These) */
                bg-primary text-light font-medium
                
                /* Behavior */
                transition-all duration-200 hover:opacity-90 active:scale-[0.98]
                ">
                <span>Button Text</span>
            </button>
        </>
    )
}
import { Card} from "@/components/ui/card"
import { ArrowUp } from "lucide-react"
import Image from "next/image";
import Link from "next/link";



const DashboardCard = () => {
    return (
        <Card className="w-full dark:bg-[#102A43] dark:text-white bg-green">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 bg-red-600">
                {/* 1st card */}
                <div className="bg-white p-4 rounded-sm shadow-xs shadow-[#d5d5d5] dark:bg-[#102A43] dark:text-white">
                    <div className="flex items-center justify-between">
                        <h3 className="flex flex-col items-center text-lg font-semibold mb-2">Total Sales <span className="text-14px font-normal text-[#ededed ]" >last 7 days</span></h3>
                    </div>
                    <div className="flex items-center gap-3 max-w-90.25">
                        <p className="text-[32px] font-bold">N10,000</p>
                        <p className='text-[16px]'>sales</p>
                        <p className='flex items-center  text-[14px] text-[#1EB564]'><ArrowUp className='h-4' /> 10.4%</p>
                    </div>
                    <p className="text-14px font-normal text-[#ededed ]" >last 7 days
                    </p>
                    <div className="flex flex-col justify-end items-end ">
                        <Link href="/#" className='text-[16px] border items-end border-[#ededed] rounded-full px-6 py-1' >Detaill
                        </Link>

                    </div>
                </div>
                {/* 2nd card  */}
                <div className="bg-[#00fe67] p-4 rounded-sm shadow-xs shadow-[#d5d5d5] dark:bg-[#102A43] dark:text-white">
                    <div className="flex items-center justify-between">
                        <h3 className="flex flex-col items-center text-lg font-semibold mb-2">Total Orders <span className="text-14px font-normal text-[#ededed ]" >last 7 days</span></h3>

                        <Image src="/Vector.png" alt="3 dots image" width={4} height={4} />

                    </div>
                    <div className="flex items-center gap-3 max-w-90.25">
                        <p className="text-[32px] font-bold">10.7K</p>
                        <p className='text-[16px]'>order</p>
                        <p className='flex items-center  text-[14px] text-[#1EB564]'><ArrowUp className='h-4' /> 14.4%</p>
                    </div>
                    <p className="text-14px font-normal text-[#ededed ]" >last 7 days
                    </p>

                    <div className="flex flex-col justify-end items-end ">
                        <Link href="/#" className='text-[16px] border items-end border-[#ededed] rounded-full px-6 py-1' >Detaill
                        </Link>

                    </div>
                </div>
                {/* 3rd card */}
                <div className="bg-[#00fe67] p-4 rounded-sm shadow-xs shadow-[#d5d5d5] dark:bg-[#102A43] dark:text-white">
                    <div className="flex items-center justify-between">
                        <h3 className="flex flex-col items-center text-lg font-semibold mb-2">Costumers <span className="text-14px font-normal text-[#ededed ]" >last 7 days</span></h3>

                        <Image src="/Vector.png" alt="3 dots image" width={4} height={4} />

                    </div>
                    <div className="flex items-center gap-3 max-w-90.25">
                        <p className="text-[32px] font-bold">100K</p>
                        <p className='text-[16px]'>visit</p>
                        <p className='flex items-center  text-[14px] text-[#1EB564]'><ArrowUp className='h-4' /> 30.5%</p>
                    </div>
                    <p className="text-14px font-normal text-[#ededed ]" >last 7 days
                    </p>

                    <div className="flex flex-col justify-end items-end ">
                        <Link href="/#" className='text-[16px] border items-end border-[#ededed] rounded-full px-6 py-1' >Detaill
                        </Link>

                    </div>
                </div>
                {/* 4th card */}
                <div className="bg-[#00fe67] p-4 rounded-sm shadow-xs shadow-[#d5d5d5] dark:bg-[#102A43] dark:text-white">
                    <div className="flex items-center justify-between">
                        <h3 className="flex flex-col items-center text-lg font-semibold mb-2">Products <span className="text-14px font-normal text-[#ededed ]" >last 7 days</span></h3>

                        <Image src="/Vector.png" alt="3 dots image" width={4} height={4} />

                    </div>
                    <div className="flex items-center gap-3 max-w-90.25">
                        <p className="text-[32px] font-bold">20.0</p>
                        <p className='text-[16px]'>variety</p>
                        <p className='flex items-center  text-[14px] text-[#1EB564]'><ArrowUp className='h-4' /> 14.4</p>
                    </div>
                    <p className="text-14px font-normal text-[#ededed ]" >last 7 days
                    </p>

                    <div className="flex flex-col justify-end items-end ">
                        <Link href="/#" className='text-[16px] border items-end border-[#ededed] rounded-full px-6 py-1' >Detaill
                        </Link>

                    </div>
                </div>
            </div>
        </Card>
    )
}

export default DashboardCard

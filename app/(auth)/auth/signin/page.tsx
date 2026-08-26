import { Button } from "@/app/global-components/buttonsLayout/Button"
import Image from "next/image"
import React from 'react'


const Signin = () => {
    return (
        <div className="relative">
            <div className="w-full md:max-w-[80%] mx-auto px-10 md:px-0">
                <div className="flex items-center md:justify-between md:gap-10 pt-30">

                    <div className="bg-[#CBE4E8] pt-10 hidden md:block">
                        <Image src="/images/auth2.png" alt="Sign Logo" width={500} height={20} className="z-10 py-px md:hidden lg:block" />
                        <Image src="/images/auth2.png" alt="Sign Logo" width={300} height={20} className="z-10 py-px lg:hidden md:block" />
                    </div>

                    <form className="w-full md:w-auto">
                        <fieldset className="flex flex-col items-start gap-6">
                            <legend className="text-2xl md:text-4xl font-medium leading-12 tracking-[0.04em]">Log in to Exclusive
                            </legend>
                            <p>Enter your details below</p>

                            <input type="email" name="Email" placeholder="Email" className="w-full md:w-92.5 h-8 border-b border-gray-400 outline-none" required />

                            <input type="password" name="Password" placeholder="Password" className="w-full md:w-92.5 h-8 border-b border-gray-400 outline-none" required />

                            <div className="flex items-center gap-15 mt-4">
                                <Button href="" className="w-40!">log In</Button>

                                <div className="text-primary text-end">Forgot Password?</div>
                            </div>
                        </fieldset>
                    </form>

                </div>
            </div>
            <div className="stick top-40 md:w-100 lg:w-158 h-120 bg-[#CBE4E8] rounded-tr-sm rounded-br-sm -mt-120  hidden md:block"></div>
        </div>
    )
}

export default Signin
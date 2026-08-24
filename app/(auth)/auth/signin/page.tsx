import { Button } from "@/app/global-components/buttonsLayout/Button"
import Image from "next/image"
import React from 'react'


const Signin = () => {
    return (
        <div className="relative">
            <div className="max-w-[80%] mx-auto">
                <div className="flex items-center justify-between gap-10 pt-30">

                    <Image src="/images/auth2.png" alt="Sign Logo" width={500} height={20} className="w-z-10 z-10" />

                    <form>
                        <fieldset className="flex flex-col items-start gap-6">
                            <legend className="text-4xl font-medium leading-12 tracking-[0.04em]">Log in to Exclusive
                            </legend>
                            <p>Enter your details below</p>

                            <input type="email" name="Email" placeholder="Email" className="w-92.5 h-8 border-b border-gray-400 outline-none" required />

                            <input type="password" name="Password" placeholder="Password" className="w-92.5 h-8 border-b border-gray-400 outline-none" required />
                            
                            <div className="flex items-center gap-15 mt-4">
                                <Button href="" className="w-40!">log In</Button>

                                <div className="text-primary text-end">Forgot Password?</div>
                            </div>
                        </fieldset>
                    </form>

                </div>
            </div>
            <div className="absolute w-157 h-120 top-20 bg-[#CBE4E8] rounded-tr-sm rounded-br-sm"></div>
        </div>
    )
}

export default Signin
import { AddToCartButton, Button } from "@/app/global-components/buttonsLayout/Button"
import Image from "next/image"
import React from 'react'


const Signup = () => {
    return (
        <div className="relative">
            <div className="max-w-[80%] mx-auto">
                <div className="flex items-center justify-between gap-10 pt-30">

                    <Image src="/images/auth2.png" alt="Sign Logo" width={500} height={20} className="w-z-10 z-10" />

                    <form>
                        <fieldset className="flex flex-col items-start gap-6">
                            <legend className="text-4xl font-medium leading-12 tracking-[0.04em]">Create an account
                            </legend>
                            <p>Enter your details below</p>

                            <input type="text" name="name" placeholder="Name" className="w-92.5 h-8 border-b border-gray-400 outline-none" required />

                            <input type="email" name="Email" placeholder="Email" className="w-92.5 h-8 border-b border-gray-400 outline-none" required />

                            <input type="password" name="Password" placeholder="Password" className="w-92.5 h-8 border-b border-gray-400 outline-none" required />
                            
                            <Button href="" className="bg-primary w-full">Create Account</Button>
                            

                            <Button href="" className="w-full bg-light! text-dark! flex items-center border border-dark-muted">
                                <Image src="/images/google.svg" alt="" width={20} height={20} />
                                Create Account
                            </Button>
                       
                        </fieldset>
                    </form>

                </div>
            </div>
            <div className="absolute w-157 h-120 top-20 bg-[#CBE4E8] rounded-tr-sm rounded-br-sm"></div>
        </div>
    )
}

export default Signup
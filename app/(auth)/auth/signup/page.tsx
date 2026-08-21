import { Button } from "@/app/global-components/buttonsLayout/Button"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const Signup = () => {
    return (
        <div className="relative">
            <div className="w-[80%] mx-auto">
                <div className="flex items-center justify-between gap-10">

                    <Image src="/images/auth2.png" alt="Sign Logo" width={500} height={20} className="w-z-10 z-10 pt-30" />

                    <form className="pt-20">
                        <fieldset className="flex flex-col items-start gap-6">
                            <legend className="text-4xl font-medium leading-12 tracking-[0.04em]">Create an account
                            </legend>
                            <p>Enter your details below</p>

                            <input type="text" name="Name" placeholder="Name" className="w-92.5 h-8 border-b border-dark-muted outline-none" required />

                            <input type="email" name="Email" placeholder="Email" className="w-92.5 h-8 border-b border-dark-muted outline-none" required />

                            <input type="password" name="Password" placeholder="Password" className="w-92.5 h-8 border-b border-dark-muted outline-none" required />


                            <Button href="" className="w-full!">Sign Up</Button>
                            <Button href="" className="w-full! bg-light! text-dark! border border-dark-muted"><ShoppingCart /> Sign Up</Button>

                            <div className="flex items-center text-center gap-4">
                                <p className="text-dark-muted">Already have account?  </p>
                                <Link href="#" className="text-dark-muted font-semibold underline underline-offset-8">Log In</Link>
                            </div>

                        </fieldset>
                    </form>
                </div>
            </div>
            <div className="absolute w-157 h-120 top-20 bg-[#CBE4E8] rounded-tr-sm rounded-br-sm"></div>
        </div>
    )
}

export default Signup
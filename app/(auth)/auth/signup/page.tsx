"use client";
import { Button } from "@/app/global-components/buttonsLayout/Button"

import React, { useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from "next/image";

const Signup = () => {
     const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register, isLoading } = useAuth();
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await register(name, email, password);
      alert('Registration successful! You can now log in.');
      router.push('/login');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Signup failed');
      }
    }
  };

    return (
        <div className="relative">
            <div className="w-full md:max-w-[80%] mx-auto px-10 md:px-0">
                <div className="flex items-center md:justify-between md:gap-10 pt-30">
                    
                    <div className="bg-[#CBE4E8] mt-20 hidden md:block">
                        <Image src="/images/auth2.png" alt="Sign Logo" width={500} height={20} className="z-10 py-px md:hidden lg:block"/>
                        <Image src="/images/auth2.png" alt="Sign Logo" width={300} height={20} className="z-10 py-px lg:hidden md:block"/>
                    </div>


                    <form onSubmit={handleSignup} className="w-full md:w-auto">
                        <fieldset className="flex flex-col items-start gap-6">
                            <legend className="text-2xl md:text-4xl font-medium leading-12 tracking-[0.04em]">Create an account
                            </legend>
                            <p>Enter your details below</p>

                            <input type="text" name="name" placeholder="Name" className="w-full md:w-92.5 h-8 border-b border-gray-400 outline-none" required />

                            <input type="email" name="Email" placeholder="Email" className="w-full md:w-92.5 h-8 border-b border-gray-400 outline-none" required />

                            <input type="password" name="Password" placeholder="Password" className="w-full md:w-92.5 h-8 border-b border-gray-400 outline-none" required />

                            <Button href="" className="bg-primary w-full">Create Account</Button>


                            <Button disabled={isLoading} className="w-full bg-light! text-dark! flex items-center border border-dark-muted cursor-pointer">
                                <Image src="/images/google.svg" alt="" width={20} height={20} />
                                Create Account
                            </Button>
                        </fieldset>
                        <p style={{ marginTop: '16px' }}>Already have an account? <Link href="/login">Login</Link></p>
                    </form>

                </div>
            </div>
            <div className="top-40 md:w-100 lg:w-158 h-120 bg-[#CBE4E8] rounded-tr-sm rounded-br-sm -mt-120  hidden md:block"></div>
        </div>
    )
}

export default Signup
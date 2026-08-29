"use client";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
// testing till API url resolved

export interface SignupData {
    full_name: string,
    username: string,
    email: string,
    phone_number: string,
    password: string
}

const Signup = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        username: '',
        email: '',
        phone_number: '',
        password: ''
    })

    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    // moved hook to top-level of component
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // setFormData({ ...formData, [e.target.name]: e.target.value })
    }
// TO BE REMOVED LATER
    // const parseError = (error: unknown): string => {
    //     if (axios.isAxiosError(error)) {
    //         const detail = error.response?.data?.detail;

    //         if (typeof detail === "string") {
    //             return detail;
    //         } else if (Array.isArray(detail)) {
    //             return detail
    //                 .map((item) => item.msg)
    //                 .filter(Boolean)
    //                 .join(", ");
    //         } else {
    //             return (
    //                 error.response?.data?.message ||
    //                 "Registration failed. Please check your details."
    //             );
    //         }
    //     }
    //     return "Something went wrong. Please try again.";
    // }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)


        try {
            await axios.post(
                `https://opt-evacuate-abrasive.ngrok-free.dev/auth/register`, formData, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                } 
            );

            setMessage("Registration successful! Proceed to Sigin");
            router.push('/auth/signin')
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const detail = error.response?.data?.detail;

                if (typeof detail === "string") {
                    setMessage(detail);
                } else if (Array.isArray(detail)) {
                    setMessage(
                        detail
                            .map((item) => item.msg)
                            .filter(Boolean)
                            .join(", ")
                    );
                } else {
                    setMessage(
                        error.response?.data?.message ||
                        "Registration failed. Please check your details."
                    );
                }
            } else {
                setMessage("Something went wrong. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }

    //  const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault()
    //     if (loading) return
    //     setLoading(true)
    //     setMessage('')

    //     try {
    //         const apiBase = process.env.NEXT_PUBLIC_API_URL || ''
    //         if (!apiBase) throw new Error('NO_API')

    //         await axios.post(
    //             `${apiBase}/auth/register`,
    //             formData,
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             }
    //         );

    //         setMessage("Registration successful! Redirecting to login...")
    //         // router.push('/auth/signin')
    //         // return // stop further execution
    //     } catch (error: unknown) {
    //         // attempt local fallback for testing
    //         try {
    //             localStorage.setItem('registered_user', JSON.stringify(formData))
    //             setMessage("Saved registration locally for testing. Redirecting to login...")
    //             router.push('/auth/signin')
    //             return
    //         } catch {
    //             // if localStorage fails, show readable API/error message
    //             const userMessage = parseError(error)
    //             setMessage(userMessage)
    //         }
    //     } finally {
    //         setLoading(false);
    //     }
    // }


    return (
        <div className="relative">
            <div className="w-full md:max-w-[80%] mx-auto px-10 md:px-0">
                <div className="flex items-center md:justify-between ">

                    <div className="mt-20 hidden w-auto md:block">
                        <Image src="/images/auth2.png" alt="Sign Logo" width={500} height={20} className="z-10 py-px md:hidden lg:flex" />
                        <Image src="/images/auth2.png" alt="Sign Logo" width={300} height={20} className="z-10 py-px lg:hidden md:flex" />
                    </div>


                    <form onSubmit={handleSubmit} className="w-full md:w-auto">
                        <fieldset className="flex flex-col items-start gap-6">
                            <legend className="text-2xl md:text-4xl font-medium leading-12 tracking-[0.04em]">
                                Create an account
                            </legend>
                            <p>Enter your details below</p>

                            <input
                                type="text"
                                name="full_name"
                                placeholder="Full Name"
                                className="w-full h-6 border-b outline-none"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="username"
                                placeholder="User Name"
                                className="w-full h-6 border-b outline-none"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full h-6 border-b outline-none"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="phone_number"
                                placeholder="Phone Number"
                                className="w-full h-6 border-b outline-none"
                                value={formData.phone_number}
                                onChange={handleChange}
                                required
                            />

                            <div className="relative w-full">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="w-full h-6 border-b outline-none"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>

                            {message && <p>{message}</p>}

                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-primary text-nowrap w-full flex items-center justify-center gap-2.5 px-12 py-4 rounded-sm text-light font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Registering..." : "Create Account"}
                            </button>
                        </fieldset>

                        <p style={{ marginTop: "16px" }}>
                            Already have an account? <Link href="/auth/signin">Login</Link>
                        </p>
                    </form>

                </div>
            </div>
            <div className="top-40 md:w-100 lg:w-158 h-120 bg-[#CBE4E8] rounded-tr-sm rounded-br-sm -mt-120  hidden md:block"></div>
        </div>
    )
}

export default Signup
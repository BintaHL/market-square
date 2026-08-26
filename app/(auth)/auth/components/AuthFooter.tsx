import React from 'react'
import { SendHorizontal } from 'lucide-react';
import { SlSocialFacebook } from "react-icons/sl";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import Image from 'next/image';

const AuthFooter = () => {
    return (
        <div className='mt-20 bg-dark'>
            <div className='w-full md:max-w-[80%] mx-auto flex justify-center'>
                <div className="flex flex-col items-start md:flex-row md:justify-between gap-10 pt-12">
                    <div className='text-hero'>
                        <h3 className='text-white'>CARTS</h3>
                        <p className='pt-3 text-sm'>Subscribe</p>
                        <p className='pt-3 text-xs'>Get 10% off your first order</p>
                        <div className="relative flex items-center pt-3">
                            {/* Input field */}
                            <input
                                type="text"
                                placeholder="Enter your email?"
                                className="w-full pl-4 pr-15 py-2 bg-black border border-white rounded-md text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all"
                            />
                            {/* search icon */}
                            <div className="absolute right-3 flex items-center pointer-events-none">
                                <SendHorizontal className="h-5 w-5 text-white" />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start justify-center md:justify-start"></div>
                    <div className='text-hero'>
                        <h3>Support</h3>
                        <p className='pt-3 text-sm'>111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.</p>
                        <p className='pt-3 text-sm'>exclusive@gmail.com</p>
                        <p className='pt-3 text-sm'>+88015-88888-9999</p>
                    </div>
                    <div className='text-hero'>
                        <h3>Account</h3>
                        <p className='pt-3 text-sm'>My Account</p>
                        <p className='pt-3 text-sm'>Login/Register</p>
                        <p className='pt-3 text-sm'>Cart</p>
                        <p className='pt-3 text-sm'>Wishlist</p>
                        <p className='pt-3 text-sm'>Shop</p>
                    </div>
                    <div className='text-hero'>
                        <h3>Quick Link</h3>
                        <p className='pt-3 text-sm'>Privacy Policy</p>
                        <p className='pt-3 text-sm'>Terms Of Use</p>
                        <p className='pt-3 text-sm'>FAQ</p>
                        <p className='pt-3 text-sm'>Contact</p>
                    </div>
                    <div className='text-hero'>
                        <h3>Download App</h3>
                        <p className='pt-3 text-xs'>Save $3 with App New User Only</p>
                        <div className='flex pt-3 gap-2'>
                            <div>
                                <Image src='/images/Qr Code.svg' alt='QR Code' width={50} height={50} />
                            </div>
                            <div className=''>
                                <Image src='/images/GooglePlay.png' alt='QR Code' width={60} height={24} className='w-15 h-auto pb-1' />
                                <Image src='/images/download-appstore.png' alt='QR Code' width={60} height={24} className='w-15 h-auto' />
                            </div>
                        </div>
                        <div className='flex gap-4 pt-3'>
                            <SlSocialFacebook size={15} className='' />
                            <FiTwitter size={15} className='' />
                            <FiInstagram size={15} className='' />
                            <FiLinkedin size={15} className='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center h-10 border-t-2 border-b-gray-950 mt-8 text-gray-500'>
                <p className='text-xs font-light pt-2'>&copy; Copyright icbm-project {new Date().getFullYear()}. All right reserved</p>
            </div>
        </div>
    )
}

export default AuthFooter

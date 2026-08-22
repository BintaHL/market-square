"use client"

import { Button } from "@/app/global-components/buttonsLayout/Button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const ProfileAccount = () => {
    const path = usePathname()

    return (
        <div className="">
            <div className="max-w-[80%] mx-auto">
                <div className="flex items-center justify-center">
                    
                    {/* left Menu */}
                    <div className="flex items-start gap-0 ">
                        <div className="flex flex-col gap-5 sticky top-30">
                            <div className="flex items-start justify-start text-sm gap-2 shrink-0 whitespace-nowrap mb-5">
                                <h6 className="text-dark-muted">Home</h6> /
                                <h6>My Account</h6>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h5>Manage My Account</h5>
                                <ul className="text-sm text-dark-muted ml-10 space-y-1">
                                    <li><Link href="#" className={path === '#' ? 'text-primary' : 'text-dark-muted'}>My Profile</Link></li>
                                    <li><Link href="#" className={path === '#' ? 'text-primary' : 'text-dark-muted'}>Address Book</Link></li>
                                    <li><Link href="#" className={path === '#' ? 'text-primary' : 'text-dark-muted'}>My payment Options</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h5>Manage Orders</h5>
                                <ul className="text-sm text-dark-muted  ml-10 space-y-1">
                                    <li><Link href="#" className={path === '#' ? 'text-primary' : 'text-dark-muted'}>My Returns</Link></li>
                                    <li><Link href="#" className={path === '#' ? 'text-primary' : 'text-dark-muted'}>My Canceliations</Link></li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h5>My WishList</h5>
                                <ul className="text-sm text-dark-muted  ml-10 space-y-1">
                                    <li><Link href="#" className={path === '#' ? 'text-primary' : 'text-dark-muted'}>Check Wishlist</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="flex flex-col  gap-3 my-30 w-[50%]">
                            <form>
                                <legend className="text-primary font-medium mb-5">Edit Your Profile</legend>
                                <div className="grid gap-4">
                                    {/* user identity */}
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="for_user">First Name</label>
                                            <input type="text" name="First Name" placeholder="fetch first name" className="bg-card-bg text-sm w-82.5 h-11 outline-dark-muted px-2" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="for_user">Last Name</label>
                                            <input type="text" name="First Name" placeholder="fetch last name" className="bg-card-bg text-sm w-82.5 h-11 outline-dark-muted px-2" />
                                        </div>
                                    </div>
                                    {/* user address */}
                                    <div className="flex items-center justify-between ">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="for_user">Email</label>
                                            <input type="email" name="Email" placeholder="fetch email" className="bg-card-bg text-sm w-82.5 h-11 outline-dark-muted px-2" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="for_user">Address</label>
                                            <input type="text" name="Address" placeholder="fetch address" className="bg-card-bg text-sm w-82.5 h-11 outline-dark-muted px-2" />
                                        </div>
                                    </div>

                                    {/* user auth credential */}

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="for_user">Password Changes</label>
                                        <input type="email" name="Email" placeholder="Current Password" className="bg-card-bg text-sm w-full h-11 outline-dark-muted px-2" />

                                        <input type="text" name="Address" placeholder="New Password" className="bg-card-bg text-sm w-full h-11 outline-dark-muted px-2" />

                                        <input type="text" name="Address" placeholder="Confirm New Password" className="bg-card-bg text-sm w-full h-11 outline-dark-muted px-2" />
                                    </div>
                                    <div className="flex items-end justify-end">
                                        <div className="flex items-center gap-10">
                                            <button>Cancel</button>
                                            <Button href="#">Save Changes</Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAccount
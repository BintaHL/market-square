"use client";

import { Button } from "@/app/global-components/buttonsLayout/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileAccount = () => {
    const pathname = usePathname();

    const menuSections = [
        {
            title: "Manage My Account",
            links: [
                { label: "My Profile", href: "/profile" },
                { label: "Address Book", href: "/address-book" },
                { label: "My Payment Options", href: "/payment-options" },
            ],
        },
        {
            title: "Manage Orders",
            links: [
                { label: "My Returns", href: "returns" },
                { label: "My Cancellations", href: "/review" },
            ],
        },
    ];

    return (
        <div className="w-full">
            <div className="max-w-[80%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 lg:gap-10 items-start">

                    {/* Left Menu */}
                    <aside className="flex flex-col gap-5 sticky top-30 min-w-0">

                        {/* Breadcrumb */}
                        <div className="flex items-center text-sm gap-2 mb-5 whitespace-nowrap">
                            <h6 className="text-dark-muted">
                                Home
                            </h6>

                            <span>/</span>

                            <h6>
                                My Account
                            </h6>
                        </div>

                        {/* Menu Sections */}
                        {menuSections.map((section) => (
                            <div
                                key={section.title}
                                className="flex flex-col gap-3"
                            >
                                <h5>{section.title}</h5>

                                <ul className="text-sm text-dark-muted ml-10 space-y-1">
                                    {section.links.map((link) => {
                                        const isActive =
                                            pathname === link.href;

                                        return (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className={
                                                        isActive
                                                            ? "text-primary"
                                                            : "text-dark-muted"
                                                    }
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </aside>

                    {/* Right Form */}
                    <main className="w-full min-w-0 lg:my-30">
                        <form className="w-full">
                            <legend className="text-primary font-medium mb-5">
                                Edit Your Profile
                            </legend>

                            <div className="grid gap-6 w-full">

                                {/* First Name / Last Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                    <div className="flex flex-col gap-2 min-w-0">
                                        <label htmlFor="firstName">
                                            First Name
                                        </label>

                                        <input
                                            id="firstName"
                                            type="text"
                                            name="firstName"
                                            placeholder="Fetch first name"
                                            className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2 min-w-0">
                                        <label htmlFor="lastName">
                                            Last Name
                                        </label>

                                        <input
                                            id="lastName"
                                            type="text"
                                            name="lastName"
                                            placeholder="Fetch last name"
                                            className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                                        />
                                    </div>
                                </div>

                                {/* Email / Address */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                    <div className="flex flex-col gap-2 min-w-0">
                                        <label htmlFor="email">
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Fetch email"
                                            className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2 min-w-0">
                                        <label htmlFor="address">
                                            Address
                                        </label>

                                        <input
                                            id="address"
                                            type="text"
                                            name="address"
                                            placeholder="Fetch address"
                                            className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                                        />
                                    </div>
                                </div>

                                {/* Password Changes */}
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="currentPassword">
                                        Password Changes
                                    </label>

                                    <input
                                        id="currentPassword"
                                        type="password"
                                        name="currentPassword"
                                        placeholder="Current Password"
                                        className="bg-card-bg text-sm w-full h-11 outline-dark-muted px-3"
                                    />

                                    <input
                                        id="newPassword"
                                        type="password"
                                        name="newPassword"
                                        placeholder="New Password"
                                        className="bg-card-bg text-sm w-full h-11 outline-dark-muted px-3"
                                    />

                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm New Password"
                                        className="bg-card-bg text-sm w-full h-11 outline-dark-muted px-3"
                                    />
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-end gap-8 mt-4">
                                    <button
                                        type="button"
                                        className="text-sm"
                                    >
                                        Cancel
                                    </button>

                                    <Button href="#">
                                        Save Changes
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default ProfileAccount;
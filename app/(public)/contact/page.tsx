import { Button } from "@/app/global-components/buttonsLayout/Button";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import React from "react";

const Contact = () => {
    return (
        <div className="w-full">
            <div className="max-w-[80%] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-start">

                    {/* RIGHT FORM*/}
                    <div className="order-1 lg:order-2 w-full min-w-0 lg:my-30">

                        <form className="flex flex-col items-start justify-center w-full">

                            <legend className="text-primary font-medium mb-5">
                                Contact Us
                            </legend>

                            <div className="grid gap-10 w-full">

                                {/* Name / Email / Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email *"
                                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone *"
                                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                                    />

                                </div>

                                {/* Message */}
                                <textarea
                                    name="message"
                                    rows={10}
                                    placeholder="Your Message"
                                    className="bg-card-bg text-sm w-full min-w-0 outline-dark-muted p-3 resize-none"
                                />

                                {/* Button */}
                                <div className="flex items-end justify-end w-full">
                                    <Button href="#">
                                        Send Message
                                    </Button>
                                </div>

                            </div>

                        </form>

                    </div>


                    {/* LEFT CONTACT INFORMATION*/}
                    <div className="order-2 lg:order-1 flex flex-col gap-5 sticky top-30 w-full min-w-0">

                        {/* Breadcrumb */}
                        <div className="flex items-start justify-start text-sm gap-2 mb-5">

                            <h6 className="text-dark-muted">
                                Home
                            </h6>

                            <span>/</span>

                            <h6>
                                My Account
                            </h6>

                        </div>


                        {/* Call To Us */}
                        <div className="flex flex-col gap-3">

                            <div className="flex items-center gap-4">

                                <div className="bg-primary w-8 h-8 flex items-center justify-center rounded-full shrink-0">
                                    <PhoneCallIcon className="text-light h-5 w-5" />
                                </div>

                                <h5>
                                    Call to Us
                                </h5>

                            </div>

                            <p className="text-sm">
                                We are available 24/7, 7 days a week.
                            </p>

                            <p className="text-sm">
                                Phone: +8801611112222
                            </p>

                        </div>


                        {/* Divider */}
                        <div className="h-px w-full max-w-[40%] bg-dark-muted my-2" />


                        {/* Email Us */}
                        <div className="flex flex-col gap-3">

                            <div className="flex items-center gap-4">

                                <div className="bg-primary w-8 h-8 flex items-center justify-center rounded-full shrink-0">
                                    <MailIcon className="text-light h-5 w-5" />
                                </div>

                                <h5>
                                    Email Us
                                </h5>

                            </div>

                            <p className="text-sm">
                                Fill out our form and we will contact
                                <br className="hidden sm:block" />
                                you within 24 hours.
                            </p>

                            <a
                                href="mailto:customer@exclusive.com"
                                className="text-sm hover:underline"
                            >
                                Emails: customer@exclusive.com
                            </a>

                            <a
                                href="mailto:support@exclusive.com"
                                className="text-sm hover:underline"
                            >
                                Emails: support@exclusive.com
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;
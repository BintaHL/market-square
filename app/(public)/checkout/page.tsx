"use client";
import { Button } from "@/app/global-components/buttonsLayout/Button";
import { useState } from "react";
import Link from "next/link";
// import { Router } from "next/router";

interface CheckoutItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryProps {
  items?: CheckoutItem[];
}



const Checkout = ({ items = [] }: OrderSummaryProps) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="w-full">
      <div className="max-w-[80%] mx-auto">
        <div className="flex items-center text-sm gap-2 mb-5 whitespace-nowrap mt-30">
          <p className="text-gray-500 mb-10">
            <Link href="/cart">Cart</Link>/ <span className="text-black">Checkout</span>
             {/* <Link href="/my account">My Account</Link>/
              <Link href="/product">product</Link>/
               <Link href="/view cart">cart</Link> /{" "} */}
            
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_2fr] gap-5 lg:gap-10 items-start">
          {/* left Form */}
          <main className="w-full min-w-0 my-10">
            <form className="w-full">
              <h2 className="font-medium mb-5">Billing Details</h2>

              <div className="grid gap-6 w-full">
                {/* First Name / Last Name */}
                <div className="grid grid-cols-1 gap-4 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col min-w-0 ">
                      {/* Name */}
                      <label htmlFor="firstName" className="text-dark-muted">
                        First Name <span className="text-primary">*</span>
                      </label>

                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                      />
                    </div>

                    {/* Email address  */}
                    <div className="flex flex-col gap-2 min-w-0  ">
                      <label htmlFor="town_city" className="text-dark-muted">
                        Email Address<span className="text-primary">*</span>
                      </label>

                      <input
                        type="email"
                        name="Email"
                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                      />
                    </div>
                  </div>

                  {/* comapany  */}
                  <div className="flex flex-col gap-2 min-w-0  ">
                    <label htmlFor="CompanyName" className="text-dark-muted">
                      Company Name
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      name="Commpany Name"
                      className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                    />
                  </div>

                  {/* Street Address  */}
                  <div className="flex flex-col gap-2 min-w-0  ">
                    <label htmlFor="Street Address" className="text-dark-muted">
                      Street Address <span className="text-primary">*</span>
                    </label>

                    <input
                      type="text"
                      name="Address"
                      className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                    />
                  </div>

                  {/* Detailed location */}
                  <div className="flex flex-col gap-2 min-w-0  ">
                    <label htmlFor="address" className="text-dark-muted">
                      Apartment, floor, etc (optional)
                    </label>

                    <input
                      type="text"
                      name="address"
                      className="bg-carsd-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Town / City  */}
                    <div className="flex flex-col gap-2 min-w-0  ">
                      <label htmlFor="town_city" className="text-dark-muted">
                        Town/City<span className="text-primary">*</span>
                      </label>

                      <input
                        type="text"
                        name="additional address"
                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                      />
                    </div>

                    {/* Phone contact number  */}
                    <div className="flex flex-col gap-2 min-w-0  ">
                      <label htmlFor="town_city" className="text-dark-muted">
                        Phone Number<span className="text-primary">*</span>
                      </label>

                      <input
                        type="text"
                        name="Phone number"
                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                      />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 min-w-0  ">
                  <input
                    type="checkbox"
                    name=""
                    className="w-5 h-5  accent-primary rounded"
                  />
                  <p className="text-md">
                    {" "}
                    save this information for faster checkout next time
                  </p>
                </div>
              </div>
            </form>
          </main>

          {/* Left side Checkout items */}
          {/* Products */}
          <div className="mt-40 border border-black p-4">
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-6"
                >
                  <div>
                    <p className="text-sm font-normal text-[#222222]">
                      {item.name}
                    </p>

                    <p className="mt-1 text-sm text-[#7B7B7B]">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <span className="text-sm text-[#222222]">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="mt-7 space-y-4 text-sm">
              {/* Subtotal */}
              <div className="flex items-center justify-between border-b border-[#BDBDBD] pb-4">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>

              {/* Shipping */}
              <div className="flex items-center justify-between border-b border-[#BDBDBD] pb-4">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-7 space-y-5">
              {/* Bank */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() => setPaymentMethod("bank")}
                  className="h-5 w-5 accent-black"
                />

                <span className="text-sm">Bank</span>
              </label>

              {/* Cash */}
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                  className="h-5 w-5 accent-black"
                />

                <span className="text-sm">Cash on delivery</span>
              </label>
            </div>

            {/* Place Order */}
            <Button href="" className="mt-6 bg-red-600">
              {" "}
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

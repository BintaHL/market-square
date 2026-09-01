"use client";
import { useState } from "react";
import { useCart } from "@/app/(public)/context/CartContext";
import { Button } from "@/app/global-components/buttonsLayout/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [loading, setLoading] = useState(false);
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000)); // fake delay

    clearCart();
    router.push("/order-success");
    setLoading(false);
  };

  return (
    <div className="ml-20 ">
      <div className="mx-auto mt-30">
        <div className="flex justify-between">
          {/* Billing Details*/}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_2fr] gap-5 lg:gap-10 items-start">
            <main className="w-full min-w-0 my-10">
              <form className="w-full">
                <h2 className="font-medium mb-5">Billing Details</h2>

                <div className="grid grid-cols-1 gap-4 w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col min-w-0 ">
    
                      <label htmlFor="firstName" className="text-dark-muted">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                      />
                    </div>
                   
                    <div className="flex flex-col gap-2 min-w-0">
                      <label htmlFor="town_city" className="text-dark-muted">
                        Email Address
                        <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="Email"
                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 min-w-0 ">
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
                 
                  <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="Street Address" className="text-dark-muted">
                      Street Address
                      <span className="text-primary">*</span>
                    </label>

                    <input
                      type="text"
                      name="Address"
                      className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                    />
                  </div>
                 
                  <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="address" className="text-dark-muted">
                      Apartment, floor, etc (optional)
                    </label>

                    <input
                      type="text"
                      name="address"
                      className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   
                    <div className="flex flex-col gap-2 min-w-0">
                      <label htmlFor="town_city" className="text-dark-muted">
                        Town/City
                        <span className="text-primary">*</span>
                      </label>

                      <input
                        type="text"
                        name="additional address"
                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2 min-w-0">
                      <label htmlFor="town_city" className="text-dark-muted">
                        Phone Number
                        <span className="text-primary">*</span>
                      </label>

                      <input
                        type="text"
                        name="Phone number"
                        className="bg-card-bg text-sm w-full min-w-0 h-11 outline-dark-muted px-3"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 min-w-0">
                  <input
                    type="checkbox"
                    name=""
                    className="w-5 h-5  accent-primary rounded"
                  />

                  <p className="text-md">
                    save this information for faster checkout next time
                  </p>
                </div>
              </form>
            </main>
          </div>

          {/* Order Summary*/}
          <div className="w-1/2 mt-40 mr-30 border p-6">
            <h2 className="text-xl font-bold mb-8">Order Summary</h2>

            {/* Mapping of cart items */}
            <div className="space-y-5">
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>

                    <div className="flex-1">
                      <p>
                        {item.name} x {item.qty}
                      </p>
                      <p>${(item.price * item.qty).toFixed(2)}</p>
                    </div>
                  </div>
                ))
              )}

              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between border-b-2 mt-4 pb-3">
                  <p>Subtotal:</p>
                  <p>${subtotal.toFixed(2)}</p> {/* <- was $0 before */}
                </div>
                <div className="flex justify-between border-b-2 mt-4 pb-3">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between font-bold">
                  <p>Total:</p>
                  <p>${subtotal.toFixed(2)}</p> {/* <- was $0 before */}
                </div>

                {/* Payment Methods */}
                <div className="mt-7 space-y-5">
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

                <Button
                  onClick={placeOrder}
                  disabled={loading}
                  className="mt-6 bg-red-600"
                >
                  {loading ? "Placing Order....." : "Place Order"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

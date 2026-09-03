"use client";

import Image from "next/image";
import { useState } from "react";
import { showToast } from "@/app/components/providers/ToastProvider";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "/api/auth/forgot-password",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Unable to process request"
        );
      }

      showToast("If an account exists, a reset link has been sent.", "success");

    } catch (error) {

      showToast(
        error instanceof Error ? error.message : "Something went wrong",
        "error"
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative my-10">
      <div className="w-full md:max-w-[80%] mx-auto px-10 md:px-0">
        <div className="flex items-center md:justify-between md:gap-10 pt-30">
          <div className="bg-[#CBE4E8] mt-20 hidden md:block">
            <Image
              src="/images/auth2.png"
              alt="Sign Logo"
              width={805}
              height={706}
              loading="eager"
              sizes="(max-width: 1023px) 300px, 500px"
              className="z-10 h-auto w-[300px] py-px lg:w-[500px]"
            />
          </div>

          <form onSubmit={handleSubmit} className="w-full md:w-auto">
            <fieldset className="flex flex-col items-start gap-10">
              <legend className="text-2xl md:text-4xl font-medium leading-12 tracking-[0.04em]">
                Log in to Vendora
              </legend>
              <p>Enter your details below</p>

         
                
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-92.5 h-8 border-b border-gray-400 outline-none"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

              {message && <p className="text-success">{message}</p>}


               <button
                className="right-3 top-1/2 -translate-y-1/2 bg-primary text-light w-full text-center py-4 rounded-sm"
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Send Reset Link"}
              </button>
             

         

            </fieldset>
          </form>
        </div>
      </div>
      <div className="top-40 md:w-110 lg:w-158 h-120 bg-[#CBE4E8] rounded-tr-sm rounded-br-sm -mt-120  hidden md:block"></div>
    </div>
  );
}

"use client";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { showToast } from "@/app/components/providers/ToastProvider";


interface LoginData {
  username: string;
  password: string;
}

const Signin = () => {
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        "/api/auth/login",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      console.log("LOGIN RESPONSE:", response.data);

      showToast("Login successful!", "success");

      router.push("/");
      router.refresh();

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;

        if (typeof detail === "string") {
          showToast(detail, "error");

        } else if (Array.isArray(detail)) {
          const message = detail
            .map((item) => item.msg)
            .filter(Boolean)
            .join(", ");
          showToast(message, "error");

        } else {
          showToast(
            error.response?.data?.message ||
            "Login failed. Please check your username and password.",
            "error"
          );
        }

      } else if (error instanceof Error) {
        showToast(error.message, "error");

      } else {
        showToast("Something went wrong. Please try again.", "error");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative my-10">
      <div className="w-full md:max-w-[80%] mx-auto px-10 md:px-0">
        <div className="flex items-center md:justify-between md:gap-10 pt-30">
          <div className="bg-[#CBE4E8] mt-20 hidden md:block">
            <Image
              src="/images/auth2.png"
              alt="Sign Logo"
              width={500}
              height={20}
              className="z-10 min-h-120 py-px md:hidden lg:block"
            />
            <Image
              src="/images/auth2.png"
              alt="Sign Logo"
              width={300}
              height={20}
              className="z-10 min-h-120 py-px lg:hidden md:block"
            />
          </div>

          <form onSubmit={handleLogin} className="w-full md:w-auto">
            <fieldset className="flex flex-col items-start gap-6">
              <legend className="text-2xl md:text-4xl font-medium leading-12 tracking-[0.04em]">
                Log in to Exclusive
              </legend>
              <p>Enter your details below</p>

              <input
                type="text"
                name="username"
                placeholder="username"
                className="w-full md:w-92.5 h-8 border-b border-gray-400 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full h-6 border-b outline-none"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
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

              <div className="flex items-center gap-15 mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-nowrap w-full flex items-center justify-center gap-2.5 px-12 py-4 rounded-sm text-light font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging..." : "Log In"}
                </button>
                {/* <Button h className="w-40!"></Button> */}
                <Link href="/auth/forgot-password" className="text-primary text-end text-nowrap">Forgot Password?</Link>
              </div>

              <p style={{ marginTop: "16px" }}>
                 <Link href="/auth/signup" className="underline underline-offset-8 text-dark-muted">Signup</Link> to create an account.
              </p>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="top-40 md:w-110 lg:w-158 h-120 bg-[#CBE4E8] rounded-tr-sm rounded-br-sm -mt-120  hidden md:block"></div>
    </div>
  );
};

export default Signin;

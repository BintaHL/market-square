import { redirect } from "next/navigation";
import { isLoggedIn } from "@/app/lib/auth";
import Navbar from "../(public)/components/Navbar";
import Footer from "../(public)/components/Footer";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  const loggedIn = await isLoggedIn();

  if (!loggedIn) {
    redirect("/auth/signin");
  }

  return <><Navbar/>{children} <Footer/></>;
}
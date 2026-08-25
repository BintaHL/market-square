// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




export const metadata: Metadata = {
  title: "Premium Marketplace",
  description: "Curated high-end goods",
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
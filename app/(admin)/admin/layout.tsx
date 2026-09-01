import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  // Not logged in
  if (!user) {
    redirect("/authenticate/signin");
  }

  // Logged in but NOT admin
  if (user.role !== "admin") {
    redirect("/");
  }

  return <>{children}</>;
}
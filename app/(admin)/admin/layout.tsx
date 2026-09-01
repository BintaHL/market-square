import { redirect } from "next/navigation";
import { isLoggedIn } from "@/app/lib/auth";
import { getCurrentUser } from "@/app/lib/user";

export const dynamic = "force-dynamic";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = await isLoggedIn();

  if (!loggedIn) {
    redirect("/auth/signin");
  }

  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  if (user.role !== "admin") {
    redirect("/");
  }

  return <>{children}</>;
}
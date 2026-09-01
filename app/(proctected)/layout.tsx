import { redirect } from "next/navigation";

import { isLoggedIn } from "@/app/lib/auth";

export const dynamic = "force-dynamic";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = await isLoggedIn();

  if (!loggedIn) {
    redirect("/auth/signin");
  }

  return <>{children}</>;
}
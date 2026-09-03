import { redirect } from "next/navigation";
import { getCurrentUser } from "@/app/lib/user";

export const dynamic = "force-dynamic";

export default async function SellerProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/signin");
  }

  if (user.role !== "seller") {
    redirect("/");
  }

  return <>{children}</>;
}

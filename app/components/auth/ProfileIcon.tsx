"use client";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfileIcon() {
  const router = useRouter();

  function handleProfileClick() {
    router.push("/profile");
  }

  return (
    <button
      type="button"
      onClick={handleProfileClick}
      aria-label="Profile"
    >
      <User size={22} />
    </button>
  );
}
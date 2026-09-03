"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { showToast } from "@/app/components/providers/ToastProvider";

export default function ChangePasswordPage() {
  const router = useRouter();

  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "/api/auth/change-password",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            current_password: currentPassword,
            new_password: newPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to change password"
        );
      }

      showToast("Password changed successfully!", "success");

      router.refresh();

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
    <main>
      <h1>Change Password</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) =>
            setCurrentPassword(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) =>
            setNewPassword(e.target.value)
          }
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Changing..."
            : "Change Password"}
        </button>

        {message && <p>{message}</p>}
      </form>
    </main>
  );
}
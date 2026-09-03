"use client";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export type ToastType = "success" | "error" | "info" | "warning";

const toastStyles: Record<ToastType, { background: string; color: string }> = {
  success: { background: "#16a34a", color: "#ffffff" },
  error: { background: "#dc2626", color: "#ffffff" },
  info: { background: "#2563eb", color: "#ffffff" },
  warning: { background: "#f59e0b", color: "#ffffff" },
};

export function showToast(
  message: string,
  type: ToastType = "info",
  options: Record<string, unknown> = {}
) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: toastStyles[type].background,
      color: toastStyles[type].color,
      borderRadius: "8px",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12)",
      fontSize: "14px",
      padding: "12px 16px",
    },
    ...options,
  }).showToast();
}

export default function ToastProvider() {
  return null;
}

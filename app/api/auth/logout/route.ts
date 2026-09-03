import { NextResponse } from "next/server";
import { clearAuthCookies } from "@/app/lib/auth";

export async function POST() {
  await clearAuthCookies();

  return NextResponse.json({
    success: true,
  });
}
import { NextResponse } from "next/server";
import {
  getRefreshToken,
  setAuthCookies,
  clearAuthCookies,
} from "@/app/lib/auth";

interface RefreshResponse {
  access_token: string;
  refresh_token?: string;
  token_type: string;
}

export async function POST() {
  const refreshToken = await getRefreshToken();

  if (!refreshToken) {
    return NextResponse.json(
      { message: "No refresh token" },
      { status: 401 }
    );
  }

  try {
    const response = await fetch(
      `${process.env.BACKEND_API_URL}/refresh`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: refreshToken,
        }),
      }
    );

    if (!response.ok) {
      await clearAuthCookies();

      return NextResponse.json(
        { message: "Session expired" },
        { status: 401 }
      );
    }

    const data: RefreshResponse =
      await response.json();

    await setAuthCookies(
      data.access_token,
      data.refresh_token ?? refreshToken
    );

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to refresh session" },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";

import {
  getRefreshToken,
  setAuthCookies,
} from "@/app/lib/auth";

export async function POST() {
  try {
    const refreshToken = await getRefreshToken();

    if (!refreshToken) {
      return NextResponse.json(
        {
          message: "No refresh token",
        },
        {
          status: 401,
        }
      );
    }

    const response = await fetch(
      `${process.env.API_URL}/auth/refresh`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          refresh_token: refreshToken,
        }),

        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          message: "Session expired",
        },
        {
          status: 401,
        }
      );
    }

    await setAuthCookies(
      data.access_token,
      data.refresh_token ?? refreshToken
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error("REFRESH ERROR:", error);

    return NextResponse.json(
      {
        message: "Unable to refresh session",
      },
      {
        status: 500,
      }
    );
  }
}
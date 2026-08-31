import { NextResponse } from "next/server";

import {
  setAuthCookies,
} from "@/lib/auth";

import type {
  AuthTokens,
  LoginRequest,
  AuthErrorResponse,
} from "@/lib/types/auth";

export async function POST(
  request: Request
): Promise<NextResponse> {
  try {
    const body: LoginRequest = await request.json();

    const response = await fetch(
      `${process.env.BACKEND_API_URL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorData =
        (await response.json()) as AuthErrorResponse;

      return NextResponse.json(
        {
          message:
            errorData.message ||
            "Invalid email or password.",
        },
        {
          status: response.status,
        }
      );
    }

    const data: AuthTokens =
      await response.json();

    await setAuthCookies(
      data.access_token,
      data.refresh_token
    );

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Unable to login.",
      },
      {
        status: 500,
      }
    );
  }
}
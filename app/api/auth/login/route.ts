import { NextResponse } from "next/server";
import { setAuthCookies } from "@/app/lib/auth";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export async function POST(request: Request) {
  try {
    const body: LoginRequest = await request.json();

    const apiBase = process.env.API_URL;

    if (!apiBase) {
      return NextResponse.json(
        { message: "API URL is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${apiBase}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: body.username,
          password: body.password,
        }),
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    const tokens: LoginResponse = data;

    await setAuthCookies(
      tokens.access_token,
      tokens.refresh_token
    );

    return NextResponse.json({
      success: true,
      message: "Login successful",
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
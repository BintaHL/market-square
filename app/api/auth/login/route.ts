import { NextResponse } from "next/server";
import {
  DEMO_ADMIN_ACCESS_TOKEN,
  DEMO_ADMIN_REFRESH_TOKEN,
  isDemoAuthEnabled,
  setAuthCookies,
} from "@/app/lib/auth";

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

    if (isDemoAuthEnabled()) {
      const username = process.env.DEMO_ADMIN_USERNAME ?? "admin";
      const password = process.env.DEMO_ADMIN_PASSWORD ?? "admin123";

      if (body.username !== username || body.password !== password) {
        return NextResponse.json(
          { message: "Invalid demo admin credentials" },
          { status: 401 }
        );
      }

      await setAuthCookies(
        DEMO_ADMIN_ACCESS_TOKEN,
        DEMO_ADMIN_REFRESH_TOKEN
      );

      return NextResponse.json({
        success: true,
        message: "Demo admin login successful",
        user: { role: "admin" },
      });
    }

    const apiBase = process.env.API_URL;

    // If API URL isn't configured, allow a safe fallback for local/demo
    // development: accept demo admin credentials when running
    // non-production. This lets you log in even when the backend URL
    // isn't set or live.
    if (!apiBase) {
      if (process.env.NODE_ENV !== "production") {
        const username = process.env.DEMO_ADMIN_USERNAME ?? "admin";
        const password = process.env.DEMO_ADMIN_PASSWORD ?? "admin123";

        if (body.username === username && body.password === password) {
          await setAuthCookies(
            DEMO_ADMIN_ACCESS_TOKEN,
            DEMO_ADMIN_REFRESH_TOKEN
          );

          return NextResponse.json({
            success: true,
            message: "Demo admin login (fallback) successful",
            user: { role: "admin" },
          });
        }

        return NextResponse.json(
          { message: "API URL is not configured" },
          { status: 500 }
        );
      }

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

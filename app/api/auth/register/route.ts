import { NextResponse } from "next/server";

interface SignupData {
  full_name: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const body: SignupData = await request.json();

    const apiBase = process.env.API_URL;

    if (!apiBase) {
      return NextResponse.json(
        {
          message: "API URL is not configured",
        },
        { status: 500 }
      );
    }

    const response = await fetch(
      `${apiBase}/auth/register`,
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

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, {
        status: response.status,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful!",
      },
      {
        status: response.status,
      }
    );

  } catch (error) {
    console.error("REGISTER ERROR:", error);

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
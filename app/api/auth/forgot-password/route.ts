import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      `${process.env.API_URL}/auth/forgot-password`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),

        cache: "no-store",
      }
    );

    return NextResponse.json({
      success: true,
      message:
        "If an account exists, a reset link has been sent.",
    });

  } catch (error) {

    console.error(
      "FORGOT PASSWORD ERROR:",
      error
    );

    return NextResponse.json({
      success: true,
      message:
        "If an account exists, a reset link has been sent.",
    });
  }
}
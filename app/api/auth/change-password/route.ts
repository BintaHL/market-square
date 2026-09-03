import { NextResponse } from "next/server";

import { apiFetch } from "@/app/lib/api";


export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();


    const response =
      await apiFetch(
        "/auth/change-password",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(body),
        }
      );


    const data =
      await response.json();


    return NextResponse.json(
      data,
      {
        status: response.status,
      }
    );


  } catch (error) {

    console.error(
      "CHANGE PASSWORD ERROR:",
      error
    );


    return NextResponse.json(
      {
        message:
          "Unable to change password",
      },
      {
        status: 500,
      }
    );
  }
}
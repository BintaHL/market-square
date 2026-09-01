import { NextResponse } from "next/server";

import { getAccessToken } from "@/app/lib/auth";

export async function POST(
  request: Request
) {
  try {
    const accessToken =
      await getAccessToken();

    if (!accessToken) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }


    const body = await request.json();


    const response = await fetch(
      `${process.env.API_URL}/seller/register`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${accessToken}`,
        },

        body: JSON.stringify({
          business_name:
            body.business_name,

          business_description:
            body.business_description,
        }),
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
      "SELLER APPLICATION ERROR:",
      error
    );


    return NextResponse.json(
      {
        message:
          "Unable to submit seller application",
      },
      {
        status: 500,
      }
    );
  }
}
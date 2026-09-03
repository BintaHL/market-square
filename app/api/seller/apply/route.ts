import { NextResponse } from "next/server";

import { getCurrentUser } from "@/app/lib/user";
import { apiFetch } from "@/app/lib/api";

export async function POST(
  request: Request
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }


    if (user.role !== "user") {
      return NextResponse.json(
        { message: "Only customer accounts can submit a seller application." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const businessName = typeof body.business_name === "string" ? body.business_name.trim() : "";
    const businessDescription = typeof body.business_description === "string" ? body.business_description.trim() : "";

    if (businessName.length < 2 || businessDescription.length < 10) {
      return NextResponse.json(
        { message: "Enter a business name and a description of at least 10 characters." },
        { status: 400 }
      );
    }


    const response = await apiFetch(
      "/sellers/register",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

        },
        body: JSON.stringify({
          business_name: businessName,
          business_description: businessDescription,
        }),
      }
    );


    const responseBody = await response.text();
    let data: unknown = { success: response.ok };

    if (responseBody) {
      try {
        data = JSON.parse(responseBody);
      } catch {
        data = {
          message: response.ok
            ? "Seller application submitted successfully."
            : "The seller service returned an invalid response.",
        };
      }
    }


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

import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/lib/user";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("GET /api/user/me ERROR:", error);

    return NextResponse.json(
      { message: "Unable to load user" },
      { status: 500 }
    );
  }
}

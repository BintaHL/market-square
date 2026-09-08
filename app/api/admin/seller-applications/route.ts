import { NextResponse } from "next/server";

import { requireRole } from "@/app/lib/authorization";
import { apiFetch } from "@/app/lib/api";

export async function GET() {
  if (!(await requireRole("admin"))) {
    return NextResponse.json({ message: "Admin access is required." }, { status: 403 });
  }

  const response = await apiFetch("/sellers/applications?status=pending");
  const responseBody = await response.text();
  let data: unknown = response.ok ? [] : { message: "Unable to load applications." };

  if (responseBody) {
    try {
      data = JSON.parse(responseBody);
    } catch {
      data = { message: "The seller service returned an invalid response." };
    }
  }

  return NextResponse.json(data, { status: response.status });
}

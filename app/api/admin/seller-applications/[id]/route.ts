import { NextResponse } from "next/server";

import { requireRole } from "@/app/lib/authorization";
import { apiFetch } from "@/app/lib/api";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Context) {
  if (!(await requireRole("admin"))) {
    return NextResponse.json({ message: "Admin access is required." }, { status: 403 });
  }

  const { decision } = await request.json();
  if (decision !== "approved" && decision !== "rejected") {
    return NextResponse.json({ message: "Decision must be approved or rejected." }, { status: 400 });
  }

  const { id } = await params;
  const response = await apiFetch(`/sellers/applications/${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ decision }),
  });
  const responseBody = await response.text();
  let data: unknown = { success: response.ok };

  if (responseBody) {
    try {
      data = JSON.parse(responseBody);
    } catch {
      data = {
        message: response.ok
          ? "Application updated successfully."
          : "The seller service returned an invalid response.",
      };
    }
  }

  return NextResponse.json(data, { status: response.status });
}

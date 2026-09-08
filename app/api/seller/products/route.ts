import { NextResponse } from "next/server";

import { requireRole } from "@/app/lib/authorization";
import { apiFetch } from "@/app/lib/api";

function unavailable() {
  return NextResponse.json({ message: "Seller access is required." }, { status: 403 });
}

export async function GET() {
  if (!(await requireRole("seller"))) return unavailable();

  const response = await apiFetch("/seller/products");
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

export async function POST(request: Request) {
  if (!(await requireRole("seller"))) return unavailable();

  const body = await request.json();
  const response = await apiFetch("/seller/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

import { NextResponse } from "next/server";

import { requireRole } from "@/app/lib/authorization";
import { apiFetch } from "@/app/lib/api";

type Context = { params: Promise<{ id: string }> };

function unavailable() {
  return NextResponse.json({ message: "Seller access is required." }, { status: 403 });
}

export async function PATCH(request: Request, { params }: Context) {
  if (!(await requireRole("seller"))) return unavailable();
  const { id } = await params;
  const response = await apiFetch(`/seller/products/${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(await request.json()),
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

export async function DELETE(_request: Request, { params }: Context) {
  if (!(await requireRole("seller"))) return unavailable();
  const { id } = await params;
  const response = await apiFetch(`/seller/products/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
  if (response.status === 204) return new NextResponse(null, { status: 204 });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

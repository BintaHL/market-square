"use client";

import { useCallback, useEffect, useState } from "react";

type Application = { id: number | string; business_name: string; business_description?: string; username?: string; email?: string; created_at?: string };

export default function SellerApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [message, setMessage] = useState("");
  const [workingId, setWorkingId] = useState<Application["id"] | null>(null);
  const load = useCallback(async () => {
    const response = await fetch("/api/admin/seller-applications", { cache: "no-store" });
    const responseBody = await response.text();
    let data: { message?: string; applications?: Application[] } | Application[] = [];
    if (responseBody) {
      try {
        data = JSON.parse(responseBody) as { message?: string; applications?: Application[] } | Application[];
      } catch {
        throw new Error("The server returned an invalid response.");
      }
    }
    if (!response.ok) {
      throw new Error(
        (Array.isArray(data) ? undefined : data.message) ??
          "Unable to load applications."
      );
    }
    setApplications(Array.isArray(data) ? data : data.applications ?? []);
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      void load().catch((error: Error) => setMessage(error.message));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  async function decide(id: Application["id"], decision: "approved" | "rejected") {
    setWorkingId(id); setMessage("");
    try {
      const response = await fetch(`/api/admin/seller-applications/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ decision }) });
      const responseBody = await response.text();
      let data: { message?: string } = {};
      if (responseBody) {
        try {
          data = JSON.parse(responseBody) as { message?: string };
        } catch {
          throw new Error("The server returned an invalid response.");
        }
      }
      if (!response.ok) throw new Error(data.message ?? "Unable to update application.");
      setApplications((current) => current.filter((application) => application.id !== id));
      setMessage(`Application ${decision}.`);
    } catch (error) { setMessage(error instanceof Error ? error.message : "Unable to update application."); }
    finally { setWorkingId(null); }
  }

  return <main className="p-6 md:p-10"><h1 className="text-2xl font-bold">Seller applications</h1><p className="mt-1 text-sm text-gray-600">Review pending seller requests. Approval grants access to product CRUD only.</p>{message && <p role="status" className="mt-4 text-sm">{message}</p>}<div className="mt-6 overflow-hidden rounded-xl border bg-white">{applications.length === 0 ? <p className="p-5 text-sm text-gray-600">No pending applications.</p> : <ul className="divide-y">{applications.map((application) => <li key={application.id} className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="font-semibold">{application.business_name}</h2><p className="text-sm text-gray-600">{application.username ?? application.email ?? "Applicant"}</p>{application.business_description && <p className="mt-2 max-w-2xl text-sm text-gray-600">{application.business_description}</p>}</div><div className="flex gap-2"><button disabled={workingId === application.id} onClick={() => decide(application.id, "approved")} className="rounded bg-green-600 px-3 py-2 text-sm font-semibold text-white disabled:opacity-50">Approve</button><button disabled={workingId === application.id} onClick={() => decide(application.id, "rejected")} className="rounded border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 disabled:opacity-50">Reject</button></div></li>)}</ul>}</div></main>;
}

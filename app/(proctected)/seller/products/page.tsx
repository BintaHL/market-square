"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: number | string;
  name: string;
  category: string;
  description: string;
  brand: string;
};

const emptyProduct = { name: "", category: "", description: "", brand: "" };

export default function SellerProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [draft, setDraft] = useState(emptyProduct);
  const [editingId, setEditingId] = useState<Product["id"] | null>(null);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const loadProducts = useCallback(async () => {
    const response = await fetch("/api/seller/products", { cache: "no-store" });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message ?? "Unable to load products.");
    setProducts(Array.isArray(data) ? data : data.products ?? []);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadProducts().catch((error: Error) => setMessage(error.message));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [loadProducts]);

  function updateDraft(field: keyof typeof draft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    setSaving(true);
    setMessage("");

    try {
      const url = editingId === null ? "/api/seller/products" : `/api/seller/products/${editingId}`;
      const response = await fetch(url, {
        method: editingId === null ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(draft),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message ?? "Unable to save product.");
      setDraft(emptyProduct);
      setEditingId(null);
      setMessage(editingId === null ? "Product created." : "Product updated.");
      await loadProducts();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to save product.");
    } finally {
      setSaving(false);
    }
  }

  function edit(product: Product) {
    setEditingId(product.id);
    setDraft({ name: product.name, category: product.category, description: product.description, brand: product.brand });
    setMessage("");
  }

  async function remove(id: Product["id"]) {
    if (!window.confirm("Delete this product?")) return;
    setMessage("");
    const response = await fetch(`/api/seller/products/${id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json();
      setMessage(data.message ?? "Unable to delete product.");
      return;
    }
    setProducts((current) => current.filter((product) => product.id !== id));
    setMessage("Product deleted.");
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">My products</h1>
          <p className="mt-1 text-sm text-gray-600">Create, update, and remove only your own listings.</p>
        </div>
        <Link href="/" className="text-sm font-medium text-primary hover:underline">Back to shop</Link>
      </div>

      <form onSubmit={submit} className="grid gap-4 rounded-xl border bg-white p-5 shadow-sm md:grid-cols-2">
        <h2 className="md:col-span-2 text-lg font-semibold">{editingId === null ? "Add a product" : "Edit product"}</h2>
        {(["name", "category", "brand"] as const).map((field) => (
          <label key={field} className="text-sm font-medium capitalize">
            {field}
            <input required value={draft[field]} onChange={(event) => updateDraft(field, event.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
        ))}
        <label className="text-sm font-medium md:col-span-2">
          Description
          <textarea required minLength={10} rows={4} value={draft.description} onChange={(event) => updateDraft("description", event.target.value)} className="mt-1 w-full rounded-md border p-2" />
        </label>
        <div className="flex gap-3 md:col-span-2">
          <button disabled={saving} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-50">
            {saving ? "Saving..." : editingId === null ? "Create product" : "Save changes"}
          </button>
          {editingId !== null && <button type="button" onClick={() => { setEditingId(null); setDraft(emptyProduct); }} className="rounded-md border px-4 py-2 text-sm">Cancel</button>}
        </div>
      </form>

      {message && <p role="status" className="mt-4 text-sm text-gray-700">{message}</p>}

      <section className="mt-8 overflow-hidden rounded-xl border bg-white">
        <h2 className="border-b px-5 py-4 text-lg font-semibold">Your listings</h2>
        {products.length === 0 ? <p className="p-5 text-sm text-gray-600">No products yet.</p> : (
          <ul className="divide-y">
            {products.map((product) => <li key={product.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
              <div><h3 className="font-semibold">{product.name}</h3><p className="text-sm text-gray-600">{product.category} · {product.brand}</p><p className="mt-1 text-sm text-gray-600">{product.description}</p></div>
              <div className="flex gap-2"><button onClick={() => edit(product)} className="rounded border px-3 py-1.5 text-sm">Edit</button><button onClick={() => remove(product.id)} className="rounded border border-red-200 px-3 py-1.5 text-sm text-red-700">Delete</button></div>
            </li>)}
          </ul>
        )}
      </section>
    </main>
  );
}

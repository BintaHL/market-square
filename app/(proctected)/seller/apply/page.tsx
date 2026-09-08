"use client";

import { useState } from "react";

export default function ApplySellerPage() {
  const [businessName, setBusinessName] = useState("");
  const [businessDescription, setBusinessDescription] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "/api/seller/apply",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            business_name: businessName,
            business_description:
              businessDescription,
          }),
        }
      );

      const responseBody = await response.text();
      let data: { message?: string } = {};

      if (responseBody) {
        try {
          data = JSON.parse(responseBody) as { message?: string };
        } catch {
          throw new Error("The server returned an invalid response.");
        }
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
          "Failed to submit application"
        );
      }

      setMessage(
        "Application submitted successfully. Please wait for admin approval."
      );

      setBusinessName("");
      setBusinessDescription("");

    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage(
          "Something went wrong."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-xl px-4 py-10">

      <h1 className="text-2xl font-semibold">
        Become a Seller
      </h1>

      <p className="mt-2 text-gray-600">
        Submit your business details for
        admin approval.
      </p>


      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        <div>
          <label
            htmlFor="business_name"
            className="block text-sm font-medium"
          >
            Business Name
          </label>

          <input
            id="business_name"
            type="text"
            value={businessName}
            onChange={(e) =>
              setBusinessName(e.target.value)
            }
            required
            className="mt-2 w-full rounded-md border p-3 outline-none"
          />
        </div>


        <div>
          <label
            htmlFor="business_description"
            className="block text-sm font-medium"
          >
            Business Description
          </label>

          <textarea
            id="business_description"
            value={businessDescription}
            onChange={(e) =>
              setBusinessDescription(e.target.value)
            }
            required
            rows={5}
            className="mt-2 w-full rounded-md border p-3 outline-none"
          />
        </div>


        {message && (
          <p className="text-sm">
            {message}
          </p>
        )}


        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-primary px-4 py-3 text-white disabled:opacity-50"
        >
          {loading
            ? "Submitting..."
            : "Submit Application"}
        </button>

      </form>

    </main>
  );
}

"use client";
import { useState } from 'react';

export function PasswordForm() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); alert("Password changed!"); }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Current Password</label>
        <input type="password" className="w-full border p-2 rounded" required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">New Password</label>
        <input type="password" className="w-full border p-2 rounded" required />
      </div>
      <button type="submit" disabled={loading} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        {loading ? 'Updating...' : 'Update Password'}
      </button>
    </form>
  );
}   
"use client";
import { useState } from 'react';

export function AccountPreferences() {
  const [lang, setLang] = useState('en');
  return (
    <div className="space-y-4 max-w-md">
      <div>
        <label className="block text-sm font-medium mb-1">Language</label>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="w-full border p-2 rounded">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div className="pt-4 border-t">
        <button className="text-red-600 hover:underline">Delete Account</button>
      </div>
    </div>
  );
}   
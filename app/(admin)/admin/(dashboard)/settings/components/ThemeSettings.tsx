"use client";
import { useState } from 'react';

export function ThemeSettings() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Select your preferred interface theme.</p>
      <div className="flex gap-4">
        {['light', 'dark', 'system'].map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`px-4 py-2 border rounded capitalize ${theme === t ? 'bg-blue-100 border-blue-500' : 'bg-white'}`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}   
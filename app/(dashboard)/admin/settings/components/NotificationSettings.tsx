"use client";
import { useState } from 'react';

export function NotificationSettings() {
  const [prefs, setPrefs] = useState({ email: true, push: false, sms: false });

  return (
    <div className="space-y-4">
      {Object.entries(prefs).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between">
          <label className="capitalize">{key} Notifications</label>
          <input 
            type="checkbox" 
            checked={value} 
            onChange={() => setPrefs(p => ({ ...p, [key]: !p[key as keyof typeof p] }))}
            className="w-5 h-5"
          />
        </div>
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Preferences</button>
    </div>
  );
}   
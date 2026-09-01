"use client";

import { useState } from 'react';


const AdminProfile = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    alert("Profile updated!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input type="text" name="firstName" className="w-full border p-2 rounded" defaultValue="John" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input type="text" name="lastName" className="w-full border p-2 rounded" defaultValue="Doe" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" name="email" className="w-full border p-2 rounded" defaultValue="john@example.com" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Bio</label>
        <textarea name="bio" className="w-full border p-2 rounded" rows={4} defaultValue="Software Developer" />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
    </form>
  );
}   

export default AdminProfile
"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PasswordForm } from "./PasswordForm";
import { NotificationSettings } from "./NotificationSettings";
import { ThemeSettings } from "./ThemeSettings";
import { AccountPreferences } from "./AccountPreferences";
import AdminProfile from "./AdminProfile";

const TABS = [
  { id: 'profile', label: 'Profile' },
  { id: 'password', label: 'Password' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'theme', label: 'Theme' },
  { id: 'account', label: 'Account' },
] as const;

export function SettingsTabs({ activeTab }: { activeTab: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTabChange = (tabId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Tabs value={activeTab} className="w-full">
      <TabsList className="grid w-full grid-cols-5 mb-8">
        {TABS.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className="cursor-pointer"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="bg-white p-6 rounded-lg shadow-md border">
        <Suspense fallback={<div>Loading...</div>}>
          {activeTab === 'profile' && (
            <TabsContent value="profile" className="mt-0">
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
              <AdminProfile />
            </TabsContent>
          )}

          {activeTab === 'password' && (
            <TabsContent value="password" className="mt-0">
              <h2 className="text-xl font-semibold mb-4">Change Password</h2>
              <PasswordForm />
            </TabsContent>
          )}

          {activeTab === 'notifications' && (
            <TabsContent value="notifications" className="mt-0">
              <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
              <NotificationSettings />
            </TabsContent>
          )}

          {activeTab === 'theme' && (
            <TabsContent value="theme" className="mt-0">
              <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
              <ThemeSettings />
            </TabsContent>
          )}

          {activeTab === 'account' && (
            <TabsContent value="account" className="mt-0">
              <h2 className="text-xl font-semibold mb-4">Account Preferences</h2>
              <AccountPreferences />
            </TabsContent>
          )}
          
          {!TABS.some(t => t.id === activeTab) && (
            <div>Invalid tab selected.</div>
          )}
        </Suspense>
      </div>
    </Tabs>
  );
}   
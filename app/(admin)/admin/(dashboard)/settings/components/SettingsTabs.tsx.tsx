// "use client";

// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { Suspense } from "react";
// import { PasswordForm } from "./PasswordForm";
// import { NotificationSettings } from "./NotificationSettings";
// import { ThemeSettings } from "./ThemeSettings";
// import { AccountPreferences } from "./AccountPreferences";
// import AdminProfile from "./AdminProfile";

// const TABS = [
//   { id: 'profile', label: 'Profile' },
//   { id: 'password', label: 'Password' },
//   { id: 'notifications', label: 'Notifications' },
//   { id: 'theme', label: 'Theme' },
//   { id: 'account', label: 'Account' },
// ] as const;

// export function SettingsTabs({ activeTab }: { activeTab: string }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const handleTabChange = (tabId: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("tab", tabId);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   return (
//     <Tabs value={activeTab} className="w-full">
//       <TabsList className="grid w-full grid-cols-5 mb-8">
//         {TABS.map((tab) => (
//           <TabsTrigger
//             key={tab.id}
//             value={tab.id}
//             onClick={() => handleTabChange(tab.id)}
//             className="cursor-pointer"
//           >
//             {tab.label}
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       <div className="bg-white p-6 rounded-lg shadow-md border">
//         <Suspense fallback={<div>Loading...</div>}>
//           {activeTab === 'profile' && (
//             <TabsContent value="profile" className="mt-0">
//               <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
//               <AdminProfile />
//             </TabsContent>
//           )}

//           {activeTab === 'password' && (
//             <TabsContent value="password" className="mt-0">
//               <h2 className="text-xl font-semibold mb-4">Change Password</h2>
//               <PasswordForm />
//             </TabsContent>
//           )}

//           {activeTab === 'notifications' && (
//             <TabsContent value="notifications" className="mt-0">
//               <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
//               <NotificationSettings />
//             </TabsContent>
//           )}

//           {activeTab === 'theme' && (
//             <TabsContent value="theme" className="mt-0">
//               <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
//               <ThemeSettings />
//             </TabsContent>
//           )}

//           {activeTab === 'account' && (
//             <TabsContent value="account" className="mt-0">
//               <h2 className="text-xl font-semibold mb-4">Account Preferences</h2>
//               <AccountPreferences />
//             </TabsContent>
//           )}
          
//           {!TABS.some(t => t.id === activeTab) && (
//             <div>Invalid tab selected.</div>
//           )}
//         </Suspense>
//       </div>
//     </Tabs>
//   );
// }   
// "use client";

// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { PasswordForm } from "./PasswordForm";
// import { NotificationSettings } from "./NotificationSettings";
// import { ThemeSettings } from "./ThemeSettings";
// import { AccountPreferences } from "./AccountPreferences";
// import AdminProfile from "./AdminProfile";

// const TABS = [
//   { id: 'profile', label: 'Profile' },
//   { id: 'password', label: 'Password' },
//   { id: 'notifications', label: 'Notifications' },
//   { id: 'theme', label: 'Theme' },
//   { id: 'account', label: 'Account' },
// ] as const;

// // 1. Inner component that safely uses useSearchParams
// function SettingsTabsContent({ activeTab }: { activeTab: string }) {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const handleTabChange = (tabId: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("tab", tabId);
//     router.push(`${pathname}?${params.toString()}`);
//   };

//   // Gracefully fallback if the server passes an invalid tab, default to 'profile'
//   const currentTab = TABS.some(t => t.id === activeTab) ? activeTab : 'profile';

//   return (
//     <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
//       <TabsList className="grid w-full grid-cols-5 mb-8">
//         {TABS.map((tab) => (
//           <TabsTrigger key={tab.id} value={tab.id}>
//             {tab.label}
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       <div className="bg-white p-6 rounded-lg shadow-md border text-slate-900">
//         <TabsContent value="profile" className="mt-0">
//           <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
//           <AdminProfile />
//         </TabsContent>

//         <TabsContent value="password" className="mt-0">
//           <h2 className="text-xl font-semibold mb-4">Change Password</h2>
//           <PasswordForm />
//         </TabsContent>

//         <TabsContent value="notifications" className="mt-0">
//           <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
//           <NotificationSettings />
//         </TabsContent>

//         <TabsContent value="theme" className="mt-0">
//           <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
//           <ThemeSettings />
//         </TabsContent>

//         <TabsContent value="account" className="mt-0">
//           <h2 className="text-xl font-semibold mb-4">Account Preferences</h2>
//           <AccountPreferences />
//         </TabsContent>
//       </div>
//     </Tabs>
//   );
// }

// // 2. Main exported component that enforces the Suspense boundary around useSearchParams
// import { Suspense } from "react";

// export function SettingsTabs({ activeTab }: { activeTab: string }) {
//   return (
//     <Suspense fallback={<div className="w-full h-48 flex items-center justify-center">Loading settings...</div>}>
//       <SettingsTabsContent activeTab={activeTab} />
//     </Suspense>
//   );
// }

// "use client"

// import * as React from "react"
// import * as TabsPrimitive from "@radix-ui/react-tabs"

// import { cn } from "@/lib/utils"

// // Ensure Tabs points directly to TabsPrimitive.Root so it inherits 'value' and 'onValueChange'
// const Tabs = TabsPrimitive.Root

// const TabsList = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.List>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.List
//     ref={ref}
//     className={cn(
//       "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
//       className
//     )}
//     {...props}
//   />
// ))
// TabsList.displayName = TabsPrimitive.List.displayName

// const TabsTrigger = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.Trigger
//     ref={ref}
//     className={cn(
//       "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
//       className
//     )}
//     {...props}
//   />
// ))
// TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// const TabsContent = React.forwardRef<
//   React.ElementRef<typeof TabsPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
// >(({ className, ...props }, ref) => (
//   <TabsPrimitive.Content
//     ref={ref}
//     className={cn(
//       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
//       className
//     )}
//     {...props}
//   />
// ))
// TabsContent.displayName = TabsPrimitive.Content.displayName

// export { Tabs, TabsList, TabsTrigger, TabsContent }
import React from 'react'

const SettingsTabs = () => {
  return (
    <div>
      <p>Search tabs</p>
    </div>
  )
}

export default SettingsTabs

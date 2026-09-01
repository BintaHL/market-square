import { SettingsTabs } from "./components/SettingsTabs.tsx";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface SettingsPageProps {
  searchParams: SearchParams;
}

const Settings = async ({ searchParams }: SettingsPageProps) => {
  const params = await searchParams;
  const activeTab = (params.tab as string) || 'profile';

  return (
    <div className="min-h-screen w-full">
      <div className="sticky top-0 z-20 w-full bg-[#d5d5d5] px-5 py-6">
        <h2 className="text-[22px] font-bold">Setting</h2>
      </div>
      <div className="px-5 py-4">
        {/* Pass the activeTab from server to the client component */}
        <SettingsTabs activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Settings;   
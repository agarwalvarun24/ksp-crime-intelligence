import OfficerProfile from "../../components/settings/OfficerProfile";
import AppearanceSettings from "../../components/settings/AppearanceSettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";
import AISettings from "../../components/settings/AISettings";
import SystemStatus from "../../components/settings/SystemStatus";

function Settings() {

  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <h1 className="text-4xl font-bold text-white mb-2">
        System Settings
      </h1>

      <p className="text-slate-400 mb-8">
        Configure platform, security and AI preferences.
      </p>


      <div className="grid xl:grid-cols-2 gap-6">

        <OfficerProfile />

        <AppearanceSettings />

        <NotificationSettings />

        <SecuritySettings />

        <AISettings />

        <SystemStatus />

      </div>

    </div>
  );

}

export default Settings;
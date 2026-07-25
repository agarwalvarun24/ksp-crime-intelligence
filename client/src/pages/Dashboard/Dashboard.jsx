import StatsGrid from "../../components/dashboard/StatsGrid";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";
import AIInsights from "../../components/dashboard/AIInsights";

import CrimeTrendChart from "../../components/charts/CrimeTrendChart";
import CrimeCategoryChart from "../../components/charts/CrimeCategoryChart";
import CrimeStatusChart from "../../components/charts/CrimeStatusChart";

import KarnatakaMap from "../../components/map/KarnatakaMap";
import NetworkGraph from "../../components/network/NetworkGraph";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Crime Intelligence Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          AI Powered Decision Support System • Karnataka State Police
        </p>
      </div>

      {/* KPI Cards */}
      <StatsGrid />

      {/* Top Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <div className="xl:col-span-2">
          <CrimeTrendChart />
        </div>

        <CrimeCategoryChart />
      </div>

      {/* Status + Map */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <CrimeStatusChart />
        <KarnatakaMap />
      </div>

      {/* Network + AI */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <NetworkGraph />
        <AIInsights />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
}

export default Dashboard;
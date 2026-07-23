import StatsGrid from "../../components/dashboard/StatsGrid";
import RecentActivity from "../../components/dashboard/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions";

import CrimeTrendChart from "../../components/charts/CrimeTrendChart";
import CrimeCategoryChart from "../../components/charts/CrimeCategoryChart";
import CrimeStatusChart from "../../components/charts/CrimeStatusChart";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Crime Intelligence Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          AI-powered analytics platform for Karnataka State Police
        </p>
      </div>

      <StatsGrid />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <CrimeTrendChart />

        <CrimeCategoryChart />

      </div>

      <div className="mt-8">

        <CrimeStatusChart />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <RecentActivity />

        <QuickActions />

      </div>

    </div>
  );
}

export default Dashboard;
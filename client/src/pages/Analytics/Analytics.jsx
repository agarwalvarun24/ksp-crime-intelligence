import SummaryCards from "../../components/charts/SummaryCards";
import CrimeTrendChart from "../../components/charts/CrimeTrendChart";
import CrimeTypePieChart from "../../components/charts/CrimeTypePieChart";
import DistrictBarChart from "../../components/charts/DistrictBarChart";
import AIInsights from "../../components/charts/AIInsights";

function Analytics() {
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-3xl font-bold text-white">
        Crime Analytics Dashboard
      </h1>

      <SummaryCards />

      <div className="grid lg:grid-cols-2 gap-6">
        <CrimeTrendChart />
        <CrimeTypePieChart />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <DistrictBarChart />
        <AIInsights />
      </div>

    </div>
  );
}

export default Analytics;
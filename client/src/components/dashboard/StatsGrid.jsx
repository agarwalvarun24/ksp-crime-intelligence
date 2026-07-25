import { useEffect, useState } from "react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Users,
} from "lucide-react";

import DashboardCard from "./DashboardCard";
import { getDashboardSummary } from "../../api/dashboardApi";

function StatsGrid() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    async function loadDashboard() {
      const dashboard = await getDashboardSummary();
      setSummary(dashboard.summary);
    }

    loadDashboard();
  }, []);

  if (!summary) {
    return <div className="text-white">Loading...</div>;
  }

  const cards = [
    {
      title: "Total Crimes",
      value: summary.totalCrimes,
      icon: Shield,
      color: "blue",
      change: 12,
    },
    {
      title: "Active Cases",
      value: summary.activeCases,
      icon: AlertTriangle,
      color: "red",
      change: -3,
    },
    {
      title: "Solved Cases",
      value: summary.solvedCases,
      icon: CheckCircle,
      color: "green",
      change: 8,
    },
    {
      title: "Officers",
      value: summary.officersDeployed,
      icon: Users,
      color: "yellow",
      change: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <DashboardCard key={card.title} {...card} />
      ))}
    </div>
  );
}

export default StatsGrid;
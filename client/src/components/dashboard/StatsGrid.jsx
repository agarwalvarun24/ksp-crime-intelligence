import { useEffect, useState } from "react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  MapPin,
} from "lucide-react";

import DashboardCard from "./DashboardCard";
import { getDashboardSummary } from "../../api/dashboardApi";

function StatsGrid() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardSummary();

        setStats(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadDashboard();
  }, []);

  if (!stats) {
    return (
      <div className="text-white">
        Loading Dashboard...
      </div>
    );
  }

  const cards = [
    {
      title: "Total Cases",
      value: stats.totalCases,
      icon: Shield,
      color: "blue",
      change: 12,
    },
    {
      title: "Active Cases",
      value: stats.activeCases,
      icon: AlertTriangle,
      color: "red",
      change: -3,
    },
    {
      title: "Solved Cases",
      value: stats.solvedCases,
      icon: CheckCircle,
      color: "green",
      change: 8,
    },
    {
      title: "Crime Hotspots",
      value: stats.hotspots,
      icon: MapPin,
      color: "yellow",
      change: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <DashboardCard
          key={card.title}
          {...card}
        />
      ))}
    </div>
  );
}

export default StatsGrid;
import DashboardCard from "./DashboardCard";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  MapPin,
} from "lucide-react";

function StatsGrid() {
  const stats = [
    {
      title: "Total Cases",
      value: "1,452",
      icon: Shield,
      color: "blue",
      change: 12,
    },
    {
      title: "Active Cases",
      value: "386",
      icon: AlertTriangle,
      color: "red",
      change: -3,
    },
    {
      title: "Solved Cases",
      value: "1,066",
      icon: CheckCircle,
      color: "green",
      change: 8,
    },
    {
      title: "Crime Hotspots",
      value: "23",
      icon: MapPin,
      color: "yellow",
      change: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((item) => (
        <DashboardCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
          color={item.color}
          change={item.change}
        />
      ))}
    </div>
  );
}

export default StatsGrid;
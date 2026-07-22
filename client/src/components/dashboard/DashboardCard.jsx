import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

function DashboardCard({
  title,
  value,
  icon,
  color = "blue",
  change = 0,
}) {
  const colors = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  };

  const Icon = icon;

  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      hover:border-blue-500
      transition-all
      duration-300
      shadow-lg
    "
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {value}
          </h2>
        </div>

        <div
          className={`
          h-14
          w-14
          rounded-xl
          flex
          items-center
          justify-center
          border
          ${colors[color]}
        `}
        >
          <Icon size={28} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        {change >= 0 ? (
          <ArrowUpRight
            className="text-green-400"
            size={18}
          />
        ) : (
          <ArrowDownRight
            className="text-red-400"
            size={18}
          />
        )}

        <span
          className={
            change >= 0
              ? "text-green-400"
              : "text-red-400"
          }
        >
          {Math.abs(change)}%
        </span>

        <span className="text-slate-500 text-sm">
          vs last month
        </span>
      </div>
    </div>
  );
}

export default DashboardCard;
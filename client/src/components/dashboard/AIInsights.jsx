import { useEffect, useState } from "react";
import { Brain, AlertTriangle } from "lucide-react";
import { getDashboardSummary } from "../../api/dashboardApi";

function badge(level) {
  switch (level) {
    case "HIGH":
      return "bg-red-500";
    case "MEDIUM":
      return "bg-yellow-500";
    default:
      return "bg-green-500";
  }
}

function AIInsights() {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getDashboardSummary();
      setInsights(data.aiInsights || []);
    }

    load();
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
      <div className="flex items-center gap-3 mb-6">
        <Brain className="text-cyan-400" size={28} />
        <h2 className="text-xl text-white font-bold">
          AI Intelligence
        </h2>
      </div>

      <div className="space-y-4">
        {insights.map((item) => (
          <div
            key={item.id}
            className="bg-slate-800 rounded-lg p-4 border border-slate-700"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-white font-semibold">
                {item.title}
              </h3>

              <span
                className={`${badge(
                  item.level
                )} text-xs px-2 py-1 rounded-full text-white`}
              >
                {item.level}
              </span>
            </div>

            <div className="flex gap-3 mt-3">
              <AlertTriangle className="text-yellow-400" size={18} />

              <p className="text-slate-300 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIInsights;
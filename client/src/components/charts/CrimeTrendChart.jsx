import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../api/dashboardApi";

function CrimeTrendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const dashboard = await getDashboardSummary();
        setData(dashboard.trend || []);
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl p-5 shadow-lg border border-slate-800">
      <h2 className="text-lg font-semibold text-white mb-4">
        Crime Trend Analysis
      </h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="month"
              tick={{ fill: "#CBD5E1" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#CBD5E1" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="crimes"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CrimeTrendChart;
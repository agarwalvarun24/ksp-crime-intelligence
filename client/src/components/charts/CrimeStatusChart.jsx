import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import { getDashboardSummary } from "../../api/dashboardApi";

function CrimeStatusChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const dashboard = await getDashboardSummary();
        setData(dashboard.caseStatus || []);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">
        Case Status Overview
      </h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="status"
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
            <Legend />

            <Bar
              dataKey="count"
              fill="#2563EB"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CrimeStatusChart;
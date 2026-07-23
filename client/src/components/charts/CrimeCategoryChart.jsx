import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { getDashboardSummary } from "../../api/dashboardApi";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

function CrimeCategoryChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const dashboard = await getDashboardSummary();
        setData(dashboard.categories || []);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">
        Crime Categories
      </h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CrimeCategoryChart;
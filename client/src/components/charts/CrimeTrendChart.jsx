import { useEffect, useState } from "react";
import { getAnalytics } from "../../api/analyticsApi";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function CrimeTrendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const analytics = await getAnalytics();
      setData(analytics.monthlyTrend);
    }
    load();
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl p-5">
      <h2 className="text-white text-xl font-semibold mb-4">
        Monthly Crime Trend
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />
          <XAxis dataKey="month" stroke="#CBD5E1" />
          <YAxis stroke="#CBD5E1" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="crimes"
            stroke="#3B82F6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CrimeTrendChart;
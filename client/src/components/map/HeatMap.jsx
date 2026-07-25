import { useEffect, useState } from "react";
import { getCrimeStatistics } from "../../api/crimeApi";

function HeatMap() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function load() {
      const data = await getCrimeStatistics();
      setStats(data);
    }

    load();
  }, []);

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h2 className="text-xl font-bold text-white mb-6">
        Crime Statistics
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-800 p-4 rounded-lg">
          <h3 className="text-gray-400">Total Cases</h3>
          <p className="text-3xl font-bold text-white">
            {stats.totalCases}
          </p>
        </div>

        <div className="bg-red-600 p-4 rounded-lg">
          <h3>High Severity</h3>
          <p className="text-2xl">{stats.highSeverity}</p>
        </div>

        <div className="bg-orange-500 p-4 rounded-lg">
          <h3>Medium Severity</h3>
          <p className="text-2xl">{stats.mediumSeverity}</p>
        </div>

        <div className="bg-green-600 p-4 rounded-lg">
          <h3>Low Severity</h3>
          <p className="text-2xl">{stats.lowSeverity}</p>
        </div>

      </div>
    </div>
  );
}

export default HeatMap;
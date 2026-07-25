import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../api/dashboardApi";

function KarnatakaMap() {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const dashboard = await getDashboardSummary();
        setDistricts(dashboard.districtCrime || []);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 shadow-lg h-full">
      <h2 className="text-lg font-semibold text-white mb-5">
        Crime Hotspots (Top Districts)
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {districts.map((district) => (
          <div
            key={district.district}
            className="rounded-lg bg-slate-800 p-4 hover:bg-slate-700 transition"
          >
            <div className="text-white font-medium">
              {district.district}
            </div>

            <div className="mt-3 h-2 rounded bg-slate-700 overflow-hidden">
              <div
                className="h-full bg-red-500"
                style={{
                  width: `${Math.min(
                    (district.crimes / 700) * 100,
                    100
                  )}%`,
                }}
              />
            </div>

            <div className="text-red-400 mt-2 text-sm">
              {district.crimes} Crimes
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KarnatakaMap;
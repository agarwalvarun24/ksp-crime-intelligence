import { Palette, Moon, MonitorSmartphone } from "lucide-react";
import { useState } from "react";

function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`w-12 h-6 rounded-full transition ${
        value ? "bg-blue-600" : "bg-slate-700"
      }`}
    >
      <div
        className={`h-5 w-5 bg-white rounded-full mt-0.5 transition ${
          value ? "translate-x-6" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

function AppearanceSettings() {

  const [darkMode, setDarkMode] = useState(true);
  const [compact, setCompact] = useState(false);
  const [animations, setAnimations] = useState(true);

  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">

      <div className="flex items-center gap-3 mb-6">
        <Palette className="text-blue-400" size={24} />
        <h2 className="text-2xl text-white font-semibold">
          Appearance
        </h2>
      </div>

      <div className="space-y-6">

        <div className="flex justify-between items-center">

          <div className="flex gap-3 items-center">

            <Moon className="text-slate-400" />

            <div>
              <h3 className="text-white font-medium">
                Dark Mode
              </h3>

              <p className="text-slate-400 text-sm">
                Recommended for command centre.
              </p>
            </div>

          </div>

          <Toggle
            value={darkMode}
            onChange={setDarkMode}
          />

        </div>

        <div className="flex justify-between items-center">

          <div className="flex gap-3 items-center">

            <MonitorSmartphone className="text-slate-400" />

            <div>
              <h3 className="text-white font-medium">
                Compact Dashboard
              </h3>

              <p className="text-slate-400 text-sm">
                Reduce spacing to display more data.
              </p>
            </div>

          </div>

          <Toggle
            value={compact}
            onChange={setCompact}
          />

        </div>

        <div className="flex justify-between items-center">

          <div>

            <h3 className="text-white font-medium">
              Enable Animations
            </h3>

            <p className="text-slate-400 text-sm">
              Smooth transitions throughout the application.
            </p>

          </div>

          <Toggle
            value={animations}
            onChange={setAnimations}
          />

        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
          Save Appearance
        </button>

      </div>
    </div>
  );
}

export default AppearanceSettings;
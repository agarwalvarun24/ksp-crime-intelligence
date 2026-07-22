import {
  FilePlus2,
  MapPinned,
  BarChart3,
  Download,
} from "lucide-react";

const actions = [
  {
    title: "Register FIR",
    description: "Create a new FIR entry",
    icon: FilePlus2,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Open Crime Map",
    description: "View hotspots across Karnataka",
    icon: MapPinned,
    color: "bg-red-600 hover:bg-red-700",
  },
  {
    title: "Analytics",
    description: "View crime trends and insights",
    icon: BarChart3,
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Export Report",
    description: "Generate PDF report",
    icon: Download,
    color: "bg-purple-600 hover:bg-purple-700",
  },
];

function QuickActions() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className={`${action.color} rounded-xl p-5 text-left transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon size={24} className="text-white" />
                <h3 className="text-white font-semibold">
                  {action.title}
                </h3>
              </div>

              <p className="text-white/80 text-sm">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickActions;
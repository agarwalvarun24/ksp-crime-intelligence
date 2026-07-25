import {
  FileText,
  Search,
  Users,
  MapPinned,
  Brain,
  Bell,
} from "lucide-react";

const actions = [
  {
    title: "Register FIR",
    icon: FileText,
    color: "bg-blue-600",
  },
  {
    title: "Search Cases",
    icon: Search,
    color: "bg-green-600",
  },
  {
    title: "Officer Directory",
    icon: Users,
    color: "bg-purple-600",
  },
  {
    title: "Crime Map",
    icon: MapPinned,
    color: "bg-red-600",
  },
  {
    title: "AI Prediction",
    icon: Brain,
    color: "bg-cyan-600",
  },
  {
    title: "Alerts",
    icon: Bell,
    color: "bg-orange-600",
  },
];

function QuickActions() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

      <h2 className="text-xl font-semibold text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-xl bg-slate-800 hover:bg-slate-700 transition p-6 text-center"
            >
              <div
                className={`w-14 h-14 ${action.color} rounded-xl flex items-center justify-center mx-auto`}
              >
                <Icon size={26} color="white" />
              </div>

              <p className="mt-4 text-white font-medium">
                {action.title}
              </p>
            </button>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;
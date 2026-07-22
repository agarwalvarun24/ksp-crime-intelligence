import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  BarChart3,
  Network,
  FileText,
  Settings,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Crime Map",
    icon: Map,
    path: "/crime-map",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Network",
    icon: Network,
    path: "/network",
  },
  {
    title: "Reports",
    icon: FileText,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="h-20 flex items-center px-6 border-b border-slate-800">
        <ShieldCheck className="text-blue-500 mr-3" size={34} />
        <div>
          <h1 className="text-white font-bold text-lg">
            Crime Intelligence
          </h1>
          <p className="text-slate-400 text-sm">
            Karnataka Police
          </p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-4 py-3 mb-2 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <div className="bg-slate-800 rounded-xl p-4">
          <p className="text-white font-semibold">
            Crime Intelligence Platform
          </p>

          <p className="text-slate-400 text-sm mt-1">
            Version 1.0
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
import {
  FileText,
  ShieldAlert,
  CheckCircle,
  UserPlus,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "New FIR Registered",
    description: "Robbery case filed at MG Road Police Station.",
    time: "5 min ago",
    icon: FileText,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "Crime Alert",
    description: "Suspicious activity detected in Bengaluru East.",
    time: "20 min ago",
    icon: ShieldAlert,
    color: "text-red-400",
  },
  {
    id: 3,
    title: "Case Closed",
    description: "Burglary case successfully resolved.",
    time: "1 hour ago",
    icon: CheckCircle,
    color: "text-green-400",
  },
  {
    id: 4,
    title: "New Officer Assigned",
    description: "Inspector Ravi assigned to Cyber Crime Division.",
    time: "2 hours ago",
    icon: UserPlus,
    color: "text-purple-400",
  },
];

function RecentActivity() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 border-b border-slate-800 pb-4 last:border-none"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center ${activity.color}`}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-medium">
                  {activity.title}
                </h3>

                <p className="text-slate-400 text-sm mt-1">
                  {activity.description}
                </p>
              </div>

              <span className="text-xs text-slate-500 whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentActivity;
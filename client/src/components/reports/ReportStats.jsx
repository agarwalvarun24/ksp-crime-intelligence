import {
  FileText,
  Clock3,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

function Card({ title, value, icon, color }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>
          <h2 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h2>
        </div>

        <div>{icon}</div>
      </div>
    </div>
  );
}

function ReportStats({ summary }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      <Card
        title="Reports"
        value={summary.totalReports}
        color="text-blue-500"
        icon={<FileText size={36} color="#3b82f6" />}
      />

      <Card
        title="Monthly"
        value={summary.monthlyReports}
        color="text-green-500"
        icon={<BarChart3 size={36} color="#22c55e" />}
      />

      <Card
        title="Pending"
        value={summary.pendingReports}
        color="text-yellow-500"
        icon={<Clock3 size={36} color="#eab308" />}
      />

      <Card
        title="Completed"
        value={summary.completedReports}
        color="text-purple-500"
        icon={<CheckCircle2 size={36} color="#8b5cf6" />}
      />
    </div>
  );
}

export default ReportStats;
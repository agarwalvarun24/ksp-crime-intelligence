import {
  Users,
  Smartphone,
  Car,
  Landmark,
  FileWarning,
} from "lucide-react";

function Card({
  title,
  value,
  icon,
  color,
}) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h2>

        </div>

        <div className="text-slate-300">
          {icon}
        </div>

      </div>

    </div>
  );
}

function NetworkStats() {

  return (

    <div className="grid grid-cols-5 gap-6">

      <Card
        title="Suspects"
        value="2"
        color="text-red-500"
        icon={<Users size={36} />}
      />

      <Card
        title="Phones"
        value="1"
        color="text-blue-500"
        icon={<Smartphone size={36} />}
      />

      <Card
        title="Vehicles"
        value="1"
        color="text-green-500"
        icon={<Car size={36} />}
      />

      <Card
        title="Banks"
        value="1"
        color="text-yellow-500"
        icon={<Landmark size={36} />}
      />

      <Card
        title="Cases"
        value="1"
        color="text-purple-500"
        icon={<FileWarning size={36} />}
      />

    </div>

  );

}

export default NetworkStats;
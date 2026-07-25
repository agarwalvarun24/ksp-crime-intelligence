function Card({ title, value, color }) {
  return (
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-700">

      <h3 className="text-gray-400 text-sm">
        {title}
      </h3>

      <h1 className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </h1>

    </div>
  );
}

function NetworkStats() {

  return (

    <div className="grid grid-cols-4 gap-5">

      <Card
        title="Suspects"
        value="2"
        color="text-red-500"
      />

      <Card
        title="Phones"
        value="1"
        color="text-blue-500"
      />

      <Card
        title="Vehicles"
        value="1"
        color="text-green-500"
      />

      <Card
        title="Cases"
        value="1"
        color="text-purple-500"
      />

    </div>

  );

}

export default NetworkStats;
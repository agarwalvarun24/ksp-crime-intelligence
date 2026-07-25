function NetworkGraph() {
  const nodes = [
    {
      name: "Suspect A",
      color: "bg-red-500",
    },
    {
      name: "Suspect B",
      color: "bg-yellow-500",
    },
    {
      name: "Suspect C",
      color: "bg-blue-500",
    },
    {
      name: "Gang X",
      color: "bg-purple-500",
    },
    {
      name: "Broker",
      color: "bg-green-500",
    },
    {
      name: "Informer",
      color: "bg-cyan-500",
    },
  ];

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-5 shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-6">
        Criminal Network
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {nodes.map((node) => (
          <div
            key={node.name}
            className="flex flex-col items-center"
          >
            <div
              className={`w-16 h-16 rounded-full ${node.color} flex items-center justify-center text-white font-bold shadow-lg`}
            >
              {node.name.charAt(0)}
            </div>

            <p className="text-slate-300 mt-3 text-sm text-center">
              {node.name}
            </p>
          </div>
        ))}

      </div>

      <div className="mt-8 text-sm text-slate-400">
        AI relationship engine integration will visualize suspect
        communication, financial links and co-offender networks here.
      </div>
    </div>
  );
}

export default NetworkGraph;
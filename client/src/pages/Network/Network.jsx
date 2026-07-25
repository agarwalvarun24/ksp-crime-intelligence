import NetworkGraph from "../../components/network/NetworkGraph";

function Network() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-white mb-6">
        Criminal Network Analysis
      </h1>

      <NetworkGraph />

    </div>
  );
}

export default Network;
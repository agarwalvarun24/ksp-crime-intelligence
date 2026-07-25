import NetworkGraph from "../../components/network/NetworkGraph";
import InvestigationPanel from "../../components/network/InvestigationPanel";
import NetworkStats from "../../components/network/NetworkStats";

function Network() {
  return (
    <div className="p-6 bg-slate-950 min-h-screen">

      <h1 className="text-4xl font-bold text-white mb-6">
        Criminal Network Analysis
      </h1>

      <NetworkStats />

      <div className="grid grid-cols-4 gap-6 mt-6">

        <div className="col-span-3">
          <NetworkGraph />
        </div>

        <div>
          <InvestigationPanel />
        </div>

      </div>

    </div>
  );
}

export default Network;
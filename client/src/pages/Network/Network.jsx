import { useState } from "react";

import NetworkGraph from "../../components/network/NetworkGraph";
import InvestigationPanel from "../../components/network/InvestigationPanel";
import NetworkStats from "../../components/network/NetworkStats";

function Network() {

  const [selectedNode, setSelectedNode] = useState({
    type: "suspect",
    label: "Suspect A",
    risk: "HIGH",
    phone: "9876543210",
    vehicle: "KA01AB1234",
    bank: "SBI",
    case: "Cyber Fraud"
  });

  return (
    <div className="min-h-screen bg-slate-950 p-8">

      {/* Header */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Criminal Network Analysis
        </h1>

        <p className="text-slate-400 mt-2">
          Analyse relationships between suspects, phones,
          vehicles, bank accounts and crime cases.
        </p>

      </div>

      {/* Statistics */}

      <NetworkStats />

      {/* Main Layout */}

      <div className="grid grid-cols-12 gap-6 mt-8">

        {/* Graph */}

        <div className="col-span-9">

          <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-xl overflow-hidden">

            <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">

              <h2 className="text-white text-xl font-semibold">
                Investigation Graph
              </h2>

              <div className="flex gap-5 text-sm">

                <span className="text-red-400">👤 Suspect</span>

                <span className="text-blue-400">📱 Phone</span>

                <span className="text-green-400">🚗 Vehicle</span>

                <span className="text-yellow-400">🏦 Bank</span>

                <span className="text-purple-400">📂 Case</span>

              </div>

            </div>

            <div className="h-[720px]">

              <NetworkGraph
                setSelectedNode={setSelectedNode}
              />

            </div>

          </div>

        </div>

        {/* Right Panel */}

        <div className="col-span-3">

          <InvestigationPanel
            selectedNode={selectedNode}
          />

        </div>

      </div>

    </div>
  );
}

export default Network;
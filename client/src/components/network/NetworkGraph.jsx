import { useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

import { getNetwork } from "../../api/networkApi";

function NetworkGraph() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await getNetwork();

        const colors = {
          suspect: "#ef4444",
          phone: "#3b82f6",
          vehicle: "#22c55e",
          bank: "#eab308",
          case: "#8b5cf6",
        };

        const icons = {
          suspect: "👤",
          phone: "📱",
          vehicle: "🚗",
          bank: "🏦",
          case: "📂",
        };

        const formattedNodes = data.nodes.map((node, index) => ({
          id: node.id,

          position: {
            x: (index % 3) * 320,
            y: Math.floor(index / 3) * 220,
          },

          data: {
            label: (
              <div
                style={{
                  background: colors[node.type],
                  color: "white",
                  borderRadius: "12px",
                  padding: "14px",
                  minWidth: "170px",
                  textAlign: "center",
                  fontWeight: "bold",
                  boxShadow: "0 0 20px rgba(0,0,0,0.35)",
                  border: "2px solid white",
                  fontSize: "15px",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    marginBottom: "8px",
                  }}
                >
                  {icons[node.type]}
                </div>

                {node.label}
              </div>
            ),
          },
        }));

        const formattedEdges = data.edges.map((edge, index) => ({
          id: `edge-${index}`,
          source: edge.source,
          target: edge.target,

          animated: true,

          type: "smoothstep",

          style: {
            stroke: "#38bdf8",
            strokeWidth: 3,
          },
        }));

        setNodes(formattedNodes);
        setEdges(formattedEdges);
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  return (
    <div
      className="rounded-xl border border-slate-700 overflow-hidden"
      style={{
        height: "700px",
        width: "100%",
        background: "#0f172a",
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        fitViewOptions={{ padding: 0.3 }}
      >
        <MiniMap
          pannable
          zoomable
          style={{
            background: "#1e293b",
          }}
        />

        <Controls />

        <Background
          gap={20}
          size={1}
          color="#334155"
        />
      </ReactFlow>
    </div>
  );
}

export default NetworkGraph;
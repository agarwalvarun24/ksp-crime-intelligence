import { useEffect, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { getNetwork } from "../../api/networkApi";

function NetworkGraph() {

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    async function load() {

      const data = await getNetwork();

      const graphNodes = data.nodes.map((node, index) => ({
        id: node.id,
        data: {
          label: node.label,
        },
        position: {
          x: 200 * (index % 3),
          y: 150 * Math.floor(index / 3),
        },
      }));

      const graphEdges = data.edges.map((edge, index) => ({
        id: `e${index}`,
        source: edge.source,
        target: edge.target,
        animated: true,
      }));

      setNodes(graphNodes);
      setEdges(graphEdges);
    }

    load();
  }, []);

  return (
    <div
      className="rounded-xl border border-slate-700 overflow-hidden"
      style={{ height: "700px" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default NetworkGraph;
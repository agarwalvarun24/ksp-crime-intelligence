import { useEffect, useState } from "react";

import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

import { getNetwork } from "../../api/networkApi";


function NetworkGraph() {

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);


  useEffect(() => {

    async function loadNetwork() {

      try {

        const data = await getNetwork();


        const formattedNodes = data.nodes.map((node,index)=>({

          id: node.id,

          data:{
            label: node.label
          },

          position:{
            x:(index % 3) * 250,
            y:Math.floor(index / 3) * 150
          }

        }));


        const formattedEdges = data.edges.map((edge,index)=>({

          id:`edge-${index}`,

          source:edge.source,

          target:edge.target,

          animated:true

        }));


        setNodes(formattedNodes);
        setEdges(formattedEdges);


      } catch(error){

        console.error(
          "Network loading error:",
          error
        );

      }

    }


    loadNetwork();


  },[]);



  return (

    <div
      style={{
        height:"650px"
      }}
      className="bg-slate-900 rounded-xl border border-slate-700"
    >

      <ReactFlow

        nodes={nodes}

        edges={edges}

        fitView

      >

        <Background/>

        <Controls/>

      </ReactFlow>


    </div>

  );

}


export default NetworkGraph;
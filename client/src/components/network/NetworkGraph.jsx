import { useEffect, useState, useMemo } from "react";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";

import { getNetwork } from "../../api/networkApi";


function NetworkGraph({ setSelectedNode }) {


  const nodeTypes = useMemo(() => ({}), []);

  const edgeTypes = useMemo(() => ({}), []);


  const [nodes, setNodes] = useState([]);

  const [edges, setEdges] = useState([]);



  useEffect(() => {


    async function loadNetwork() {


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


            x: (index % 3) * 300 + 120,


            y: Math.floor(index / 3) * 240 + 120,


          },



          data: {


            label:

              <div

                onClick={() => {


                  setSelectedNode({


                    type: node.type,


                    label: node.label,


                    risk:

                      node.type === "suspect"

                        ? "HIGH"

                        : "LOW",



                    phone:

                      node.type === "phone"

                        ? node.label

                        : "9876543210",



                    vehicle:

                      node.type === "vehicle"

                        ? node.label

                        : "KA01AB1234",



                    bank:

                      node.type === "bank"

                        ? node.label

                        : "SBI",



                    case:

                      node.type === "case"

                        ? node.label

                        : "Cyber Fraud",



                  });


                }}



                style={{


                  background:

                    colors[node.type] || "#334155",



                  width: "170px",



                  height: "105px",



                  borderRadius: "16px",



                  display: "flex",



                  flexDirection: "column",



                  justifyContent: "center",



                  alignItems: "center",



                  color: "white",



                  fontWeight: "700",



                  cursor: "pointer",



                  border:

                    "2px solid rgba(255,255,255,0.8)",



                  boxShadow:

                    "0 12px 30px rgba(0,0,0,0.45)",



                  transition:

                    "all .2s ease",



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



                <div>

                  {node.label}

                </div>



              </div>,


          },


        }));





        const formattedEdges = data.edges.map(

          (edge, index) => ({


            id: `edge-${index}`,


            source: edge.source,


            target: edge.target,


            type: "smoothstep",



            animated: true,



            markerEnd: {


              type: MarkerType.ArrowClosed,


              color: "#38bdf8",


            },



            style: {


              stroke: "#38bdf8",


              strokeWidth: 3,


            },


          })

        );




        setNodes(formattedNodes);

        setEdges(formattedEdges);



      }

      catch(error) {


        console.error(

          "Network loading error:",

          error

        );


      }


    }




    loadNetwork();



  }, [setSelectedNode]);







  return (


    <div

      style={{


        height: "100%",


        width: "100%",


        background: "#0f172a",


      }}


    >



      <ReactFlow


        nodes={nodes}


        edges={edges}


        nodeTypes={nodeTypes}


        edgeTypes={edgeTypes}


        fitView



        fitViewOptions={{


          padding: 0.4,


        }}



        nodeOrigin={[0.5,0.5]}


      >



        <MiniMap


          pannable


          zoomable



          style={{


            background:"#1e293b",


          }}



          nodeColor={(node)=>{


            const background =

              node.data?.label?.props?.style?.background;



            return background || "#64748b";


          }}



        />



        <Controls />



        <Background


          gap={18}


          size={1}


          color="#334155"


        />



      </ReactFlow>




    </div>


  );


}



export default NetworkGraph;
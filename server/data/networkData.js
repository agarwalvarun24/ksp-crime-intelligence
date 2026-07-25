module.exports = {
  nodes: [
    { id: "1", label: "Suspect A", type: "suspect" },
    { id: "2", label: "Suspect B", type: "suspect" },
    { id: "3", label: "Phone", type: "phone" },
    { id: "4", label: "Vehicle", type: "vehicle" },
    { id: "5", label: "Bank Account", type: "bank" },
    { id: "6", label: "Cyber Crime Case", type: "case" }
  ],

  edges: [
    { source: "1", target: "3" },
    { source: "3", target: "2" },
    { source: "2", target: "4" },
    { source: "2", target: "5" },
    { source: "5", target: "6" }
  ]
};
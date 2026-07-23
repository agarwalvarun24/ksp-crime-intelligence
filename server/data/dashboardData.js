module.exports = {
  summary: {
    totalCrimes: 2847,
    activeCases: 438,
    solvedCases: 2194,
    officersDeployed: 612,
  },

  trend: [
    { month: "Jan", crimes: 180 },
    { month: "Feb", crimes: 210 },
    { month: "Mar", crimes: 245 },
    { month: "Apr", crimes: 225 },
    { month: "May", crimes: 270 },
    { month: "Jun", crimes: 320 },
    { month: "Jul", crimes: 295 },
  ],

  categories: [
    { name: "Theft", value: 32 },
    { name: "Assault", value: 21 },
    { name: "Cyber Crime", value: 18 },
    { name: "Fraud", value: 15 },
    { name: "Others", value: 14 },
  ],

  caseStatus: [
    { status: "Solved", count: 2194 },
    { status: "Pending", count: 438 },
    { status: "Investigation", count: 215 },
  ],

  districtCrime: [
    { district: "Bengaluru", crimes: 650 },
    { district: "Mysuru", crimes: 280 },
    { district: "Hubballi", crimes: 210 },
    { district: "Mangaluru", crimes: 170 },
    { district: "Belagavi", crimes: 155 },
    { district: "Kalaburagi", crimes: 132 },
  ],

  recentActivity: [
    {
      id: 1,
      title: "Cyber Fraud Reported",
      location: "Bengaluru",
      time: "12 mins ago",
    },
    {
      id: 2,
      title: "Vehicle Theft Solved",
      location: "Mysuru",
      time: "35 mins ago",
    },
    {
      id: 3,
      title: "Missing Person Located",
      location: "Hubballi",
      time: "1 hr ago",
    },
    {
      id: 4,
      title: "Drug Trafficking Arrest",
      location: "Mangaluru",
      time: "2 hrs ago",
    },
  ],

  alerts: [
    {
      severity: "High",
      title: "Cyber Crime Spike",
      district: "Bengaluru",
    },
    {
      severity: "Medium",
      title: "Vehicle Theft Cluster",
      district: "Mysuru",
    },
    {
      severity: "Low",
      title: "Chain Snatching",
      district: "Belagavi",
    },
  ],
};
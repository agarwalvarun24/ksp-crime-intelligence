const crimeData = require("../data/crimeData");

exports.getAllCrimes = () => {
  return crimeData;
};

exports.getCrimeStatistics = () => {
  return {
    totalCases: crimeData.length,

    highSeverity: crimeData.filter(
      c => c.severity === "High"
    ).length,

    mediumSeverity: crimeData.filter(
      c => c.severity === "Medium"
    ).length,

    lowSeverity: crimeData.filter(
      c => c.severity === "Low"
    ).length
  };
};
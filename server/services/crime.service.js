const crimeData = require("../data/crimeData");

exports.getAllCrimes = (query = {}) => {
  let crimes = [...crimeData];

  if (query.district) {
    crimes = crimes.filter(c =>
      c.district.toLowerCase().includes(query.district.toLowerCase())
    );
  }

  if (query.crimeType) {
    crimes = crimes.filter(c => c.crimeType === query.crimeType);
  }

  if (query.severity) {
    crimes = crimes.filter(c => c.severity === query.severity);
  }

  return crimes;
};

exports.getCrimeStatistics = () => ({
  totalCases: crimeData.length,
  highSeverity: crimeData.filter(c => c.severity === "High").length,
  mediumSeverity: crimeData.filter(c => c.severity === "Medium").length,
  lowSeverity: crimeData.filter(c => c.severity === "Low").length
});
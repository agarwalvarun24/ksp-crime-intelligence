const crimeService = require("../services/crime.service");

exports.getAllCrimes = (req, res) => {
  res.json({
    success: true,
    data: crimeService.getAllCrimes()
  });
};

exports.getCrimeStatistics = (req, res) => {
  res.json({
    success: true,
    data: crimeService.getCrimeStatistics()
  });
};
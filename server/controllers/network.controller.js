const networkService = require("../services/network.service");

exports.getNetwork = (req, res) => {
  res.json({
    success: true,
    data: networkService.getNetwork()
  });
};
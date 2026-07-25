const analyticsService = require("../services/analytics.service");

exports.getAnalytics = (req, res) => {
  res.json({
    success: true,
    data: analyticsService.getAnalytics()
  });
};
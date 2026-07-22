const dashboardService = require("../services/dashboard.service");

exports.getDashboardSummary = (req, res) => {
  try {
    const summary = dashboardService.getDashboardSummary();

    res.status(200).json({
      success: true,
      data: summary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
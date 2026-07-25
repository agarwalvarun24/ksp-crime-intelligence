const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

// Routes
const dashboardRoutes = require("./routes/dashboard.routes");
const healthRoutes = require("./routes/health.routes");
const crimeRoutes = require("./routes/crime.routes");
const analyticsRoutes = require("./routes/analytics.routes");

// Middleware
app.use(cors());

app.use(express.json());

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(morgan("dev"));

// API Routes
app.use("/api/health", healthRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/crime", crimeRoutes);
app.use("/analytics", analyticsRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Crime Intelligence Platform API Running",
  });
});

module.exports = app;
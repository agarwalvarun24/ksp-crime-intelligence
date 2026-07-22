const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const dashboardRoutes = require("./routes/dashboard.routes");
const healthRoutes = require("./routes/health.routes");

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/health", healthRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Crime Intelligence Platform API Running"
    });
});

module.exports = app;
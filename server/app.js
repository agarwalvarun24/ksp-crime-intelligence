const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const healthRoutes = require("./routes/health.routes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/health", healthRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Crime Intelligence Platform API Running"
    });
});

module.exports = app;
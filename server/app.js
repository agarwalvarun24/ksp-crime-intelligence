const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

require("dotenv").config();


// Routes

const healthRoutes = require("./routes/health.routes");

const dashboardRoutes =
require("./routes/dashboard.routes");

const crimeRoutes =
require("./routes/crime.routes");

const analyticsRoutes =
require("./routes/analytics.routes");

const networkRoutes =
require("./routes/network.routes");

const reportsRoutes =
require("./routes/reports.routes");



const app = express();



// Middlewares

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true
    })
);


app.use(
    helmet({
        crossOriginResourcePolicy:false
    })
);


app.use(
    morgan("dev")
);


app.use(
    express.json()
);




// API Routes


app.use(
    "/api/health",
    healthRoutes
);


app.use(
    "/api/dashboard",
    dashboardRoutes
);


app.use(
    "/crime",
    crimeRoutes
);


app.use(
    "/api/analytics",
    analyticsRoutes
);


app.use(
    "/api/network",
    networkRoutes
);


app.use(
    "/api/reports",
    reportsRoutes
);




// Default route

app.get("/", (req,res)=>{

    res.json({

        success:true,

        message:
        "Crime Intelligence Platform API Running"

    });

});



module.exports = app;
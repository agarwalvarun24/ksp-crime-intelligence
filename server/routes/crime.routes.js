const express = require("express");

const router = express.Router();

const crimeController = require("../controllers/crime.controller");

router.get("/", crimeController.getAllCrimes);

router.get("/statistics", crimeController.getCrimeStatistics);

module.exports = router;
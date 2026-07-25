const express = require("express");
const router = express.Router();

const networkController = require("../controllers/network.controller");

router.get("/", networkController.getNetwork);

module.exports = router;
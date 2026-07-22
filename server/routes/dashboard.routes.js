const express = require("express");

const router = express.Router();

router.get("/summary", (req, res) => {

    res.json({

        totalCases: 1452,

        activeCases: 386,

        solvedCases: 1066,

        hotspots: 23

    });

});

module.exports = router;
const express = require("express");
const router = express.Router();
const campaignRoute = require("./campaign.route");

router.use("/campaign", campaignRoute);

module.exports = router;

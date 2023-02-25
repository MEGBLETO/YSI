const express = require("express");
const router = express.Router();
const campaignRoute = require("./campaign.route");
const ressourceTypeRoute = require('./ressourcetype.routes')
const ressourceRoute = require('./ressources.route')

router.use("/campaign", campaignRoute);
router.use("/type", ressourceTypeRoute)
router.use("/ressource", ressourceRoute)

module.exports = router;

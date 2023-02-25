const express = require('express')
const router = express.Router()
const CampaignController = require("../controllers/campaign.controller")





router.post('/addcampaign', CampaignController.createcampaign)
router.get('/getcampaigns', CampaignController.getCampaigns)
 


module.exports = router
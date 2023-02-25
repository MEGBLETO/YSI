const express = require('express')
const router = express.Router()
const resourceController = require("../controllers/ressources.controller")





router.post('/addressource', resourceController.addRessource)
 router.get('/getressource',  resourceController.getRessource)

 


module.exports = router
const express = require('express')
const router = express.Router()
const resoourceTypeController = require("../controllers/ressourcetype.controller")





router.post('/addressourcetype', resoourceTypeController.addRessourceType)
router.get('/getressourcetype', resoourceTypeController.getRessourceType)

 


module.exports = router
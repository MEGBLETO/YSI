const express = require('express');
const router = express.Router();
const campagneController = require('../controller/campagne.controller');


router.get('/users', campagneController.getUsers)
router.get('/', campagneController.getOneUser);
router.put('/', campagneController.updateUser);
router.delete('/:id', campagneController.deleteOneUser);

module.exports = router;
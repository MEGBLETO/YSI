const express = require('express');
const router = express.Router();
const ressourceController = require('../controller/ressource.controller');


router.get('/users', ressourceController.getUsers)
router.get('/', ressourceController.getOneUser);
router.put('/', ressourceController.updateUser);
router.delete('/:id', ressourceController.deleteOneUser);

module.exports = router;
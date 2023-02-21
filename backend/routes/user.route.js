const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');


router.get('/users', userController.getUsers)
router.get('/', userController.getOneUser);
router.put('/', userController.updateUser);
router.delete('/:id', userController.deleteOneUser);

module.exports = router;
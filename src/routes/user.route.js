const express = require('express');
const router = express.Router();
const { userController } = require('../controller');


router.post('/', userController.getAllUser);
router.put('/updateUser/:id', userController.updateUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/:id', userController.getUserId);


module.exports = router;


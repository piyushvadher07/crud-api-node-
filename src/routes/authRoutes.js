const express = require('express');

const { authController } = require('../controller');
const auth = require('../middleware/auth');
const router = express.Router();

router.post("/signup", authController.register)
router.post("/login", authController.login)

module.exports = router;
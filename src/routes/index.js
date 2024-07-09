const express = require("express")
const router = express.Router();

router.use('/users', require('./user.route'));
router.use('/auth', require('./authRoutes'));
router.use('/permissions', require('./permissionRoutes'));
router.use("/Roles", require("./roles.route"))

module.exports = router;

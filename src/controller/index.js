const authController = require("./auth.controller")
const userController = require("../controller/user.controller");
const permissionController = require("../controller/permission.controller");
const rolesController = require("../controller/role.controller");

module.exports = {
    authController,
    userController,
    permissionController,
    rolesController
}
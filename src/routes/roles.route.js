const express = require("express");
const { rolesController } = require("../controller");


const router = express.Router();

router.post("/RoleList", rolesController.getAllRoles);
router.post("/createRole", rolesController.createRole);
router.put("/updateRole/:id", rolesController.updateRole);
router.delete("/deleteRole/:id", rolesController.deleteRole);
router.get("/:id", rolesController.getRoleById);


module.exports = router;
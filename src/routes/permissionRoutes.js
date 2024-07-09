const express = require("express");
const { permissionController } = require("../controller");


const router = express.Router();

router.post("/PermissionList", permissionController.getAllPermission);
router.post("/createPermission", permissionController.createPermission);
router.put("/updatePermission/:id", permissionController.updatePermission);
router.delete("/deletePermission/:id", permissionController.deletePermission);
router.get("/:id", permissionController.getPermissionById)


module.exports = router;
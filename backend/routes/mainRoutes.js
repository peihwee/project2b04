const express = require("express");
const router = express.Router();

//const usersRoutes = require("./usersRoutes");
const inventoryRoutes = require("./inventoryRoutes");

//router.use("/users", usersRoutes);
router.use("/inventory",inventoryRoutes);


module.exports = router;
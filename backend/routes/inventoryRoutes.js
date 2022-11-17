const express = require("express");
const router = express.Router();

const controller = require("../controllers/inventoryController");
router.get("/", controller.getAllInventory);
router.get("/:id", controller.getInventoryByID);
router.post("/", controller.addInventory);
module.exports = router;


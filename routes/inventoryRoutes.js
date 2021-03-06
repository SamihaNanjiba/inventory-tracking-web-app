const express = require("express");
const router = express.Router();
const {
  getInventories,
  setInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventoryController");

router.get("/", getInventories);
router.post("/", setInventory);

router.put("/:id", updateInventory);

// Only needed for hard delete
// router.delete("/:id", deleteInventory);

module.exports = router;

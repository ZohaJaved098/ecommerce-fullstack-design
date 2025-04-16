const express = require("express");
const Flag = require("../models/Flag");
const router = express.Router();

// Get All Flags
router.get("/", async (req, res) => {
  try {
    const flags = await Flag.find();
    res.json(flags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

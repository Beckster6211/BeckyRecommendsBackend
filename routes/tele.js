const express = require("express");
const router = express.Router();

const { getAllTele } = require("../models/tele");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllTele();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
  next();
});

module.exports = router;

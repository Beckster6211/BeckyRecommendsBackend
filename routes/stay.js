const express = require("express");
const router = express.Router();

const { getAllStay } = require("../models/stay");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllStay();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
  next();
});

module.exports = router;

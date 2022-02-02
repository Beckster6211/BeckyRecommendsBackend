const express = require("express");
const router = express.Router();

const { getAllVisit } = require("../models/visit");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllVisit();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
  next();
});

module.exports = router;

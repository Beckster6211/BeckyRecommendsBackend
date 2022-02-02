const express = require("express");
const router = express.Router();

const { getAllRead } = require("../models/read");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllRead();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
  next();
});
module.exports = router;

const express = require("express");
const router = express.Router();

const { getAllFilm } = require("../models/film");

router.get("/", async (req, res, next) => {
  try {
    const result = await getAllFilm();
    res.json({ success: true, data: result });
  } catch (err) {
    console.log(err);
  }
  next();
});

module.exports = router;

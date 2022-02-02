const express = require("express");
var cors = require("cors");
const app = express();
const port = 3002;

// const dotenv = require("dotenv");
// dotenv.config();

const filmRouter = require("./routes/film");
const foodRouter = require("./routes/food");
const readRouter = require("./routes/read");
const stayRouter = require("./routes/stay");
const teleRouter = require("./routes/tele");
const visitRouter = require("./routes/visit");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cors());

app.use("/becfilm", filmRouter);
app.use("/becfood", foodRouter);
app.use("/becread", readRouter);
app.use("/becstay", stayRouter);
app.use("/bectele", teleRouter);
app.use("/becvisit", visitRouter);

//  this for local host credientials
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// this for heroku credientials
app.listen(process.env.PORT || 3000);
module.exports = app;

const express = require("express");
var cors = require("cors");
const app = express();
const port = 3002;

const dotenv = require("dotenv");
dotenv.config();

const foodRouter = require("./routes/food");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cors());

app.use("/becfood", foodRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

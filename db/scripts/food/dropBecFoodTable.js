let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS becFoodTable`;

async function dropBecFoodTable() {
  let result = await query(statement);
  console.log(result);
}

dropBecFoodTable();

let { query } = require("../../index");

const sqlStatement = `CREATE TABLE IF NOT EXISTS becFoodTable(
    id SERIAL PRIMARY KEY,
    food TEXT,
    recipe TEXT,
    why TEXT,
    emoji TEXT DEFAULT ''
);`;

async function createBecFoodTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createBecFoodTable();

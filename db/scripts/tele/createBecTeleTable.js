let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS becTeleTable(
    id SERIAL PRIMARY KEY,
    tvShow TEXT, 
    provider TEXT DEFAULT '',
    connected TEXT DEFAULT '',
    genre TEXT DEFAULT '',
    numberOfSeries INTEGER,
    description TEXT DEFAULT '',
    why TEXT DEFAULT '',
    emoji TEXT DEFAULT ''
);`;

async function createBecTeleTable() {
  let result = await query(sqlStatement);
  console.log(sqlStatement);
}

createBecTeleTable();

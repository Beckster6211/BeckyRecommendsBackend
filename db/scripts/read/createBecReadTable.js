let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS becReadTable(
    id SERIAL PRIMARY KEY,
    book TEXT,
    author TEXT DEFAULT '',
    connected TEXT DEFAULT '',
    genre TEXT DEFAULT '',
    numberOfBooks INTEGER,
    description TEXT DEFAULT '',
    why TEXT DEFAULT ''
);`;

async function createBecReadTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createBecReadTable();

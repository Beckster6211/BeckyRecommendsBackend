const { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS becVisitTable(
    id SERIAL PRIMARY KEY,
    what TEXT,
    location TEXT DEFAULT '', 
    why TEXT DEFAULT '',
    emoji TEXT DEFAULT ''
);`;

async function createBecVisitTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createBecVisitTable();

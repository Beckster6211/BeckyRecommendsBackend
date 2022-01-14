let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS becStayTable(
    id SERIAL PRIMARY KEY,
    what TEXT,
    location TEXT DEFAULT '',
    details TEXT DEFAULT '',
    why TEXT DEFAULT '',
    emoji TEXT DEFAULT ''
);`;

async function createBecStayTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createBecStayTable();

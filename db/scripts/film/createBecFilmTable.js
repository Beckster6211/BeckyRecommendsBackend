let { query } = require("../../index");

let sqlStatement = `CREATE TABLE IF NOT EXISTS becFilmTable(
    id SERIAL PRIMARY KEY, 
    film TEXT,
    provider TEXT DEFAULT '',
    connected TEXT DEFAULT '',
    genre TEXT DEFAULT '',
    description TEXT DEFAULT '',
    why TEXT DEFAULT '',
    emoji TEXT DEFAULT ''
);`;

async function createBecFilmTable() {
  let result = await query(sqlStatement);
  console.log(result);
}

createBecFilmTable();

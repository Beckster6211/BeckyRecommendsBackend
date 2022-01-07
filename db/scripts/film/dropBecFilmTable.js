let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS becFilmTable`;

async function dropBecFilmTable() {
  let result = await query(statement);
  console.log(result);
}

dropBecFilmTable();

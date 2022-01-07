let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS becReadTable`;

async function dropBecReadTable() {
  let result = await query(statement);
  console.log(result);
}

dropBecReadTable();

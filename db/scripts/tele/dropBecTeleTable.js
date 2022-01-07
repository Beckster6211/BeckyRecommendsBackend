let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS becTeleTable`;

async function dropTeleTable() {
  let result = await query(statement);
  console.log(result);
}

dropTeleTable();

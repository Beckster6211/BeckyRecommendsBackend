let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS becVisitTable`;

async function dropBecVisitTable() {
  let result = await query(statement);
  console.log(result);
}

dropBecVisitTable();

let { query } = require("../../index");

let statement = `DROP TABLE IF EXISTS becStayTable`;

async function dropBecStayTable() {
  let result = await query(statement);
  console.log(result);
}

dropBecStayTable();

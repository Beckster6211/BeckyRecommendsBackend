const { query } = require("../db");

async function getAllVisit() {
  const result = await query(`SELECT * FROM becVisitTable`);
  // console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllVisit,
};

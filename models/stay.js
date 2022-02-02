const { query } = require("../db");

async function getAllStay() {
  const result = await query(`SELECT * FROM becStayTable`);
  // console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllStay,
};

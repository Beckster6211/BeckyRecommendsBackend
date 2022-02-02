const { query } = require("../db");

async function getAllTele() {
  const result = await query(`SELECT * FROM becTeleTable`);
  // console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllTele,
};

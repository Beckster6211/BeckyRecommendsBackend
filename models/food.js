const { query } = require("../db/index");

async function getAllFood() {
  const result = await query(`SELECT * FROM becFoodTable`);
  // console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllFood,
};

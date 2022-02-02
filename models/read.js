const { query } = require("../db");
// const { food } = require("../food"); // think dont need this in food models file

async function getAllRead() {
  const result = await query(`SELECT * FROM becReadTable`);
  // console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllRead,
};

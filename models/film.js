const { query } = require("../db");

async function getAllFilm() {
  const result = await query(`SELECT * FROM becFilmTable`);
  // console.log(result.rows);
  return result.rows;
}

module.exports = {
  getAllFilm,
};

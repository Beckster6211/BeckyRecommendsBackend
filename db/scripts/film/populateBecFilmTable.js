let { query } = require("../../index");

let film = require("../../../data/film");

let insertData = `INSERT INTO becFilmTable(film, provider, connected, genre, description, why) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

async function populateBecFilmTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].film,
      array[index].provider,
      array[index].connected,
      array[index].genre,
      array[index].description,
      array[index].why,
    ];
    let result = await query(insertData, values);
    console.log(result);
  }
}

populateBecFilmTable(film);

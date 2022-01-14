let { query } = require("../../index");

let tele = require("../../../data/tele");

let insertData = `INSERT INTO becTeleTable(tvShow, provider, connected, genre, numberOfSeries, description, why, emoji) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

async function populateBecTeleTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].tvShow,
      array[index].provider,
      array[index].connected,
      array[index].genre,
      array[index].numberOfSeries,
      array[index].description,
      array[index].why,
      array[index].emoji,
    ];
    let result = await query(insertData, values);
    console.log(result);
  }
}

populateBecTeleTable(tele);

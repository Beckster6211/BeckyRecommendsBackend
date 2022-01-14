const { query } = require("../../index");

let visit = require("../../../data/visit");

let insertData = `INSERT INTO becVisitTable(what, location, why, emoji) VALUES ($1, $2, $3, $4) RETURNING *`;

async function populateBecVisitTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].what,
      array[index].location,
      array[index].why,
      array[index].emoji,
    ];
    let result = await query(insertData, values);
    console.log(result);
  }
}

populateBecVisitTable(visit);

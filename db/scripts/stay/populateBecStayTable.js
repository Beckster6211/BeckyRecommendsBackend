let { query } = require("../../index");

let stay = require("../../../data/stay");

let insertData = `INSERT INTO becStayTable(what, location, details, why) VALUES ($1, $2, $3, $4) RETURNING *`;

async function populateBecStayTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].what,
      array[index].location,
      array[index].details,
      array[index].why,
    ];
    let result = await query(insertData, values);
    console.log(result);
  }
}

populateBecStayTable(stay);

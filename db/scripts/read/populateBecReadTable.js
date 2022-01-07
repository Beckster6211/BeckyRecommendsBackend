let { query } = require("../../index");

let read = require("../../../data/read");

let insertData = `INSERT INTO becReadTable(book, author, connected, genre, numberOfBooks, description, why) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;

async function populateBecReadTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].book,
      array[index].author,
      array[index].connected,
      array[index].genre,
      array[index].numberOfBooks,
      array[index].description,
      array[index].why,
    ];
    let result = await query(insertData, values);
    console.log(result);
  }
}

populateBecReadTable(read);

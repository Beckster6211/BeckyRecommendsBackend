let { query } = require("../../index");

let food = require("../../../data/food");

let insertData = `INSERT INTO becFoodTable(food, recipe, why, emoji) VALUES ($1, $2, $3, $4) RETURNING *`;

async function populateBecFoodTable(array) {
  for (let index = 0; index < array.length; index++) {
    let values = [
      array[index].food,
      array[index].recipe,
      array[index].why,
      array[index].emoji,
    ];
    let result = await query(insertData, values);
    console.log(result);
  }
}

populateBecFoodTable(food);

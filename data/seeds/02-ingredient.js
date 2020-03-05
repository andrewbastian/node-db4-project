exports.seed = async function(knex) {
  await knex("ingredient").insert([
    { ingredient_id: 1, ingredient_name: "canola oil", quantity: "1 cup", recipe_id: 1 },
    { ingredient_id: 2, ingredient_name: "light brown sugar", quantity: "1/4 cup", recipe_id: 1 },
    { ingredient_id: 3, ingredient_name: "sorghum", quantity: "2 tsp", recipe_id: 1 },
    { ingredient_id: 4, ingredient_name: "large eggs", quantity: "3", recipe_id: 1 },
    { ingredient_id: 5, ingredient_name: "salt", quantity: "1 tsp", recipe_id: 1 },
    { ingredient_id: 6, ingredient_name: "buttermilk", quantity: "1/2 cup", recipe_id: 2 },
    { ingredient_id: 7, ingredient_name: "flower", quantity: "3 cups", recipe_id: 2 },
    { ingredient_id: 8, ingredient_name: "ground cardamom", quantity: "1 TBS", recipe_id: 2 },
    { ingredient_id: 9, ingredient_name: "ground clove", quantity: "1", recipe_id: 3 },
    { ingredient_id: 10, ingredient_name: "ginger", quantity: "3 oz", recipe_id: 3 },
    { ingredient_id: 11, ingredient_name: "baking soda", quantity: "7 oz", recipe_id: 3 },
  ])
}


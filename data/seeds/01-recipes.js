
exports.seed = async function(knex) {
  await knex("recipes").insert([   
    { recipe_name: "Gingerbread Beer Bundt Cake with Chocolate Glaze"},
    { recipe_name: "Lemon Poppy Seed Muffins"},
    { recipe_name: "Black Pepper Popovers with Chives and Parmesan"},
  ])
}
exports.seed = async function(knex) {
  await knex("recipes_ingredient").truncate()
  await knex("ingredient").truncate()
  await knex("steps").truncate()
  await knex("recipes").truncate()
}

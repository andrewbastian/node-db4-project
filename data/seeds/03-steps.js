exports.seed = async function(knex) {
  await knex("steps").insert([
    { step_number: 1, instructions: "make dough", recipe_id: 1 },
    { step_number: 2, instructions: "mess up", recipe_id: 1 },
    { step_number: 3, instructions: "make dough again", recipe_id: 1 },
    { step_number: 4, instructions: "bake @ 700 degrees for 3min", recipe_id: 1 },
    { step_number: 5, instructions: "enjoy", recipe_id: 1 },
    { step_number: 1, instructions: "mix dough", recipe_id: 2 },
    { step_number: 2, instructions: "bake @ 300 degrees for 10min", recipe_id: 2 },
    { step_number: 3, instructions: "let rest for 7hrs", recipe_id: 2 },
    { step_number: 1, instructions: "mix ingredients", recipe_id: 3 },
    { step_number: 2, instructions: "cry into messed up dough", recipe_id: 3 },
    { step_number: 3, instructions: "bake anyway, it still might turn out ok...", recipe_id: 3 },
  ])
}

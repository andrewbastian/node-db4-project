const db = require('../data/dbConfig')

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes_ingredient as ri')
        .join('ingredient as i', 'ri.ingredient_id', 'i.ingredient_id')
        .join('recipes as r', 'ri.recipe_id', 'r.id')
        .select('r.recipe_name', 'i.ingredient_name', 'i.quantity')
        .where('ri.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('steps as s')
        .join('recipes as r', 's.recipe_id', 'r.id')
        .select('r.recipe_name', 's.step_number', 's.instructions')
        .where('r.id', recipe_id)
        .orderBy('s.step_number')
}
module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
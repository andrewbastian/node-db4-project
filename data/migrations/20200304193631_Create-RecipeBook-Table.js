
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name', 128)
        .unique()
        .notNullable();
    })

    await knex.schema
    .createTable("recipes_ingredient", (tbl) =>{
  		tbl.integer("recipe_id")
  	  		.references("id")
  			.inTable("recipes")
  			.onDelete("CASCADE")
  		tbl.integer("ingredient_id")
  	  		.references("id")
  			.inTable("ingredient")
  			.onDelete("CASCADE")
  	//make the primary key a combo of two columns
  		tbl.primary(["recipe_id", "ingredient_id"])

  })
    await knex.schema.createTable('ingredient', tbl => {
      tbl.increments();
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable();
      tbl.text('ingredient_name')
        .notNullable();
      tbl.float('quantity')
      	.notNullable();  
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });

    await knex.schema.createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = async function(knex) {
 await knex.schema.dropTableIfExists("recipes_ingredient")
 await knex.schema.dropTableIfExists("ingredient")
 await knex.schema.dropTableIfExists("steps")
 await knex.schema.dropTableIfExists("recipes")
};

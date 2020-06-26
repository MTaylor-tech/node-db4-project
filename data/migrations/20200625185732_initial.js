exports.up = async function(knex) {
	await knex.schema.createTable("recipes", (table) => {
		table.increments("id")
		table.text("name").notNull().unique()
		table.text("source")
	})

	await knex.schema.createTable("ingredients", (table) => {
		table.increments("id")
		table.text("name").notNull().unique()
	})

	await knex.schema.createTable("steps", (table) => {
		table.increments("id")
		table.integer("step_number").notNull()
    table.text("instructions").notNull()
		// creates a foreign key
		table
			// should be the same data type as the primary key we're pointing at
			.integer("recipe_id")
			.references("id")
			.inTable("recipes")
			// when the primary key I'm pointing at gets deleted,
			// set the value of this foreign key to null
			.onDelete("CASCADE")
			// when the primary key I'm pointing at gets changed,
			// update this foreign key to match the new value
			.onUpdate("CASCADE")
	})

	await knex.schema.createTable("recipes_ingredients", (table) => {
		table
			.integer("recipe_id")
			.references("id")
			.inTable("recipes")
			.onDelete("CASCADE")
			.onUpdate("CASCADE")
		table
			.integer("ingredient_id")
			.references("id")
			.inTable("ingredients")
			.onDelete("CASCADE")
			.onUpdate("CASCADE")
		table.real("quantity").notNull()
    table.text("measurement")
		// since this table doesn't need an ID column, we can make the
		// primary key a combination of two columns rather than a single one
		table.primary(["recipe_id", "ingredient_id"])
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("recipes_ingredients")
	await knex.schema.dropTableIfExists("steps")
	await knex.schema.dropTableIfExists("ingredients")
	await knex.schema.dropTableIfExists("recipes")
}

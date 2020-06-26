exports.seed = async function(knex) {
	await knex("recipes_ingredients").insert([
		{ recipe_id: 1, ingredient_id: 1, quantity: 1, measurement: "tbsp" },
		{ recipe_id: 1, ingredient_id: 2, quantity: 1 },
		{ recipe_id: 1, ingredient_id: 3, quantity: 2, measurement: "cloves" },
		{ recipe_id: 1, ingredient_id: 4, quantity: 120, measurement: "g" },
		{ recipe_id: 1, ingredient_id: 5, quantity: 2, measurement: "cans" },
		{ recipe_id: 1, ingredient_id: 6, quantity: 1, measurement: "tsp" },
		{ recipe_id: 1, ingredient_id: 7, quantity: 600, measurement: "g" },
		{ recipe_id: 1, ingredient_id: 8, quantity: 125, measurement: "g" },
		{ recipe_id: 1, ingredient_id: 9, quantity: 1, measurement: "small bunch" },
    { recipe_id: 2, ingredient_id: 10, quantity: 500, measurement: "g" },
    { recipe_id: 2, ingredient_id: 11, quantity: 1 },
    { recipe_id: 2, ingredient_id: 12, quantity: 2, measurement: "tsp" },
    { recipe_id: 2, ingredient_id: 13, quantity: 2, measurement: "tsp" },
    { recipe_id: 2, ingredient_id: 14, quantity: 1.5, measurement: "tsp" },
    { recipe_id: 2, ingredient_id: 15, quantity: 200, measurement: "g" },
    { recipe_id: 2, ingredient_id: 16, quantity: 2, measurement: "tbsp" },
    { recipe_id: 2, ingredient_id: 2, quantity: 1 },
    { recipe_id: 2, ingredient_id: 3, quantity: 3, measurement: "cloves" },
    { recipe_id: 2, ingredient_id: 17, quantity: 1 },
    { recipe_id: 2, ingredient_id: 18, quantity: 1, measurement: "thumb-sized piece" },
    { recipe_id: 2, ingredient_id: 19, quantity: 1, measurement: "tsp" },
    { recipe_id: 2, ingredient_id: 20, quantity: 2, measurement: "tsp" },
    { recipe_id: 2, ingredient_id: 21, quantity: 3, measurement: "tbsp" },
    { recipe_id: 2, ingredient_id: 22, quantity: 300, measurement: "ml" },
    { recipe_id: 2, ingredient_id: 23, quantity: 50, measurement: "g" },
    { recipe_id: 3, ingredient_id: 24, quantity: 100, measurement: "g" },
    { recipe_id: 3, ingredient_id: 25, quantity: 2 },
    { recipe_id: 3, ingredient_id: 16, quantity: 1, measurement: "tbsp" },
    
	])
}

const db = require("../data/config")

function getRecipes() {
	return db("recipes")
		.select("*")
}

async function getRecipeById(id) {
	const recipe = await db("recipes")
		.where({id})
    .first()

  recipe.ingredients = await getShoppingList(id)
  recipe.instructions = await getInstructions(id)

  return recipe
}

function getShoppingList(recipe_id) {
  return db("ingredients as i")
    .join("recipes_ingredients as ri", "i.id", "ri.ingredient_id")
    .where("ri.recipe_id", recipe_id)
    .select("ri.quantity", "ri.measurement", "i.name as ingredient_name")
}

function getInstructions(recipe_id) {
  return db("steps")
    .where("recipe_id", recipe_id)
    .select("step_number","instructions")
}

function getRecipesByIngredient(ingredient_id) {
  return db("recipes_ingredients as ri")
    .where("ri.ingredient_id", ingredient_id)
    .leftJoin("recipes as r", "ri.recipe_id", "r.id")
    .select("r.name as recipe_name", "ri.quantity", "ri.measurement")
}

module.exports = {
	getRecipes,
	getRecipeById,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient,
}

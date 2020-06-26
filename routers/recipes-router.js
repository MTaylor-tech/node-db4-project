const express = require("express")
const db = require("./recipes-model")

const router = express.Router()

router.get("/recipes", async (req, res, next) => {
	try {
		const recipes = await db.getRecipes()
		res.json(recipes)
	} catch(err) {
		next(err)
	}
})

router.get("/recipes/:id", async (req, res, next) => {
	try {
		const recipe = await db.getRecipeById(req.params.id)
		if (!recipe) {
			return res.status(404).json({
				message: "Recipe not found",
			})
		}

		res.json(recipe)
	} catch(err) {
		next(err)
	}
})

router.get("/recipes/:id/shopping_list", async (req, res, next) => {
  try {
    const shopping_list = await db.getShoppingList(req.params.id)
    if (shopping_list.length<1) {
      return res.status(404).json({
				message: "Shopping List Empty",
			})
    }
    res.json(shopping_list)
  } catch(err) {
		next(err)
	}
})

router.get("/recipes/:id/shoppingList", async (req, res, next) => {
  try {
    const shopping_list = await db.getShoppingList(req.params.id)
    if (shopping_list.length<1) {
      return res.status(404).json({
				message: "Shopping List Empty",
			})
    }
    res.json(shopping_list)
  } catch(err) {
		next(err)
	}
})

router.get("/recipes/:id/steps", async (req, res, next) => {
  try {
    const steps = await db.getInstructions(req.params.id)
    if (steps.length<1) {
      return res.status(404).json({
				message: "Instructions Empty",
			})
    }
    res.json(steps)
  } catch(err) {
		next(err)
	}
})

router.get("/recipes/:id/instructions", async (req, res, next) => {
  try {
    const steps = await db.getInstructions(req.params.id)
    if (steps.length<1) {
      return res.status(404).json({
				message: "Instructions Empty",
			})
    }
    res.json(steps)
  } catch(err) {
		next(err)
	}
})

router.get("/ingredients/:id/recipes", async(req, res, next) => {
  try {
    const recipes = await db.getRecipesByIngredient(req.params.id)
    if (recipes.length<1) {
      return res.status(404).json({
				message: "No Recipes Found",
			})
    }
    res.json(recipes)
  } catch(err) {
		next(err)
	}
})

module.exports = router

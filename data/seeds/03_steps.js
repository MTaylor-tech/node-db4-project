exports.seed = async function(knex) {
	await knex("steps").insert([
		{ recipe_id: 1, step_number: 1, instructions: "Heat the oil in a medium pan over a medium heat. Fry the onion and garlic for 8-10 mins until soft. Add the chorizo and fry for 5 mins more. Tip in the tomatoes and sugar, and season. Bring to a simmer, then add the gnocchi and cook for 8 mins, stirring often, until soft. Heat the grill to high."},
		{ recipe_id: 1, step_number: 2, instructions: "Stir ¾ of the mozzarella and most of the basil through the gnocchi. Divide the mixture between six ovenproof ramekins, or put in one baking dish. Top with the remaining mozzarella, then grill for 3 mins, or until the cheese is melted and golden. Season, scatter over the remaining basil and serve with green salad." },
    { recipe_id: 2, step_number: 1, instructions: "In a medium bowl, mix all the marinade ingredients with some seasoning. Chop the chicken into bite-sized pieces and toss with the marinade. Cover and chill in the fridge for 1 hr or overnight." },
    { recipe_id: 2, step_number: 2, instructions: "In a large, heavy saucepan, heat the oil. Add the onion, garlic, green chilli, ginger and some seasoning. Fry on a medium heat for 10 mins or until soft." },
    { recipe_id: 2, step_number: 3, instructions: "Add the spices with the tomato purée, cook for a further 2 mins until fragrant, then add the stock and marinated chicken. Cook for 15 mins, then add any remaining marinade left in the bowl. Simmer for 5 mins, then sprinkle with the toasted almonds. Serve with rice, naan bread, chutney, coriander and lime wedges, if you like." },
    { recipe_id: 3, step_number: 1, instructions: "Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter." },
    { recipe_id: 3, step_number: 2, instructions: "Set aside for 30 mins to rest if you have time, or start cooking straight away." },
    { recipe_id: 3, step_number: 3, instructions: "Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper." },
    { recipe_id: 3, step_number: 4, instructions: "When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go." },
    { recipe_id: 3, step_number: 5, instructions: "Serve with lemon wedges and caster sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months." },
    
	])
}

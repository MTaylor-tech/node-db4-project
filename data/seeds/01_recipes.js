exports.seed = async function(knex) {
	await knex("recipes").insert([
		{ name: "Chorizo & Mozzarella Gnocchi Bake", source: "Marianne Turner" },
    { name: "Easy Butter Chicken", source: "Jennifer Joyce" },
    { name: "Easy Pancakes", source: "Cassie Best" },
	])
}

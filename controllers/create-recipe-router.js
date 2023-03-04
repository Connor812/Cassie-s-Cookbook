const router = require('express').Router();
const { Recipe, Ingredient, RecipeIngredients } = require('../models');
const date = require('../utils/helpers');

    // This route will render the create-recipe handlebars

router.get('/', (req, res) => {
    res.render('create-recipe', {
        loggedIn: req.session.loggedIn,
        username: req.session.username
    });
});

    // Create new recipe

router.post('/', async (req, res) => {

    try {

        // Creaet Recipe
        const newRecipeData = await Recipe.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,
            date: date(),
            has_nuts: req.body.has_nuts,
        });

        // Create bulk Ingredients
        const newIngredientData = await Ingredient.bulkCreate(req.body.userIngredietns, {
            individualHooks: true,
            returning: true,
        });

        // Getting the data needs to create the comparison between the 2 tables
        const recipe = newRecipeData.get({ plain: true });
        const ingredients = newIngredientData.map((ingredient) =>
            ingredient.get({ plain: true }))

        let recipeIngredients = []
        let recipeId = recipe.id

        // For loop to get the data into a structure to bulkCreate it
        for (let i = 0; i < ingredients.length; i++) {
            recipeIngredients.push({
                recipe_id: recipeId,
                ingredient_id: ingredients[i].id
            })
        }

        const newRecipeIngredients = await RecipeIngredients.bulkCreate(recipeIngredients, {
            individualHooks: true,
            returning: true,
        });

        res.status(200).json(newRecipeData, newIngredientData, newRecipeIngredients)

    } catch (err) {

        res.status(500).json;
    }

});

module.exports = router;
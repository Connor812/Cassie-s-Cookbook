const router = require('express').Router();
const { Recipe, Review, Ingredient, RecipeIngredients } = require('../models');

const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    const recipeData = await Recipe.findAll({
        include: { model: Review, model: RecipeIngredients },
    });
    const recipes = recipeData.map((recipe) => 
    recipe.get({ plain: true })
    );

    res.render('homepage', {
        recipes,
        loggedIn: req.session.loggedIn
    })


});

router.get('/test', async (req, res) => {
    const recipeData = await Recipe.findAll({
        include: [{ model: Review }, { model: Ingredient, through: RecipeIngredients }],
    });
    const recipes = recipeData.map((recipe) => 
    recipe.get({ plain: true })
    );

    res.json(recipes)

});



router.get('/login', async (req, res) => {
    res.render('login', {
        logged_in: req.session.logged_in
    });
});

module.exports = router;
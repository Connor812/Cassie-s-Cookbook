const router = require('express').Router();
const { Recipe, Review, Ingredient, RecipeIngredients, User } = require('../models');
const Favourites = require('../models/favourites');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    const recipeData = await Recipe.findAll({
        include: [{ model: Review }, { model: Ingredient, through: RecipeIngredients }],
    });
    const recipes = recipeData.map((recipe) => 
    recipe.get({ plain: true })
    );

    res.render('homepage', {
        recipes,
        user_id: req.session.user_id,
        loggedIn: req.session.loggedIn,
        username: req.session.username
    });
});

router.get('/recipe', withAuth, async (req, res) => {
    const recipeData = await Recipe.findByPk(req.query.id, {
        include: [{ model: Review }, { model: Ingredient, through: RecipeIngredients }, { model: User, attributes: { exclude: ["password"]}}],
    });
    const recipe = recipeData.get({ plain: true })
    res.render('recipe', {
        recipe,
        user_id: req.session.user_id,
        loggedIn: req.session.loggedIn,
        username: req.session.username
    });
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

router.get('/test2', async (req, res) => {
    const recipeData = await User.findAll({
        attributes: {
            exclude: ['password']
        },
        include: [{ model: Recipe, through: Favourites }],
    });
    const favourites = recipeData.map((recipe) => 
    recipe.get({ plain: true })
    );

    res.json(favourites)
});

router.get('/test3', async (req, res) => {
    const userRecipeData = await Recipe.findAll({
        where: {
            user_id: 1
        }
    });
    const userRecipe = userRecipeData.map((recipe) => 
    recipe.get({ plain: true })
    );

    res.json(userRecipe)

});

router.get('/login', async (req, res) => {
    res.render('login', {
        logged_in: req.session.logged_in
    });
});

module.exports = router;
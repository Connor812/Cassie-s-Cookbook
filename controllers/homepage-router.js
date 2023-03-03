const router = require('express').Router();
const { Recipe, Review, Ingredient, RecipeIngredients, User, Favourites } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    console.log(req.session)
    const recipeData = await Recipe.findAll({
        include: [{ model: Review }, { model: Ingredient, through: RecipeIngredients }, {
            model: User,
            attributes: {
                exclude: ['password']
            },
        }],
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

router.get('/login', async (req, res) => {
    res.render('login', {
        logged_in: req.session.logged_in
    });
});

module.exports = router;
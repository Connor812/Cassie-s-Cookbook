const router = require('express').Router();
const { Recipe, Review, Ingedient } = require('../models');

const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    const recipeData = await Recipe.findAll({
        include: { model: Review },
    });
    const recipes = recipeData.map((recipe) => 
    recipe.get({ plain: true })
    );

    res.status(200).json(recipes)

});

router.get('/login', async (req, res) => {
    res.render('login', {
        logged_in: req.session.logged_in
    });
});


module.exports = router;
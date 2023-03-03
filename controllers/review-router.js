const router = require('express').Router();
const { Recipe } = require('../models');

router.get('/', async (req, res) => {
    const reviewData = await Recipe.findAll({
        where: {
            recipe_id: 1 // How to get this to work?
        }
    })
    const recipeReviews = reviewData.map((review) => 
    review.get({ plain: true })
    );
    res.render('reviews', {
        recipeReviews,
    });
});

module.exports = router;
const router = require('express').Router();
const { Recipe } = require('../../models');
const date = require('../../utils/helpers');

// Create new recipe 
router.post('/', async (req, res) => {
    try {
        const newRecipeData = await Recipe.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id,
            date: date(),
            has_nuts: req.body.has_nuts     
        });
        res.status(200).json(newRecipeData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
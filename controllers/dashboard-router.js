const router = require('express').Router();
const { User, Favourites, Recipe } = require('../models');

router.get('/', async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }
        const recipeData = await User.findByPk(req.session.user_id, {
            attributes: {
                exclude: ['password'],
            },
            include: [{
                model: Favourites,
                include: { model: Recipe }
            },
            { model: Recipe }],
        });
        const userData = recipeData.get({ plain: true });

        res.render('dashboard', {
            userData,
            loggedIn: req.session.loggedIn,
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

// Delete favourite

router.delete('/favourite', async (req, res) => {
    try {
        console.log(req.body.favouriteId)
    const deleteFavourite = await Favourites.destroy({
        where: {
            id: req.body.favouriteId
        },
    });
    console.log(deleteFavourite);
    res.status(200).json(deleteFavourite)
    } catch (err) {
        res.status(500).json(err);
    }
    
});

// Delete User Recipe

router.delete('/recipe', async (req, res) => {
    try {
        console.log(req.body.recipeId + '<<<<<<')
    const deleteUserRecipe = await Recipe.destroy({
        where: {
            id: req.body.recipeId
        },
    });
    console.log(deleteUserRecipe);
    res.status(200).json(deleteUserRecipe)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
    
});

module.exports = router;
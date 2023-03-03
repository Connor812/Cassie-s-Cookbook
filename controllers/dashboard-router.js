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


router.get('/test', async (req, res) => {
    try {
        const recipeData = await User.findByPk(1, {
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

        res.json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
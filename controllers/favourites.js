const router = require('express').Router();
const Favourites = require('../models/favourites');
const withAuth = require('../utils/auth');

router.post('/:id', async (req, res) => {
    try {
        if (!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }
        const newFavourite = await Favourites.create({
            user_id: req.session.user_id,
            recipe_id: req.params.id
        });
        console.log(newFavourite);
        res.status(200).json(newFavourite);
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'This combination of user and recipe already exists.' });
    } else {
      res.status(500).json({ message: 'Server error.' });
    }
    }
});


module.exports = router;
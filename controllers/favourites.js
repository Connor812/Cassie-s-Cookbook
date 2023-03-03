const router = require('express').Router();
const Favourites = require('../models/favourites');
const withAuth = require('../utils/auth');




router.post('/:id', async (req, res) => {
    try {
console.log(req.session.loggedIn)
        if (req.session.loggedIn == undefined) {
            console.log("hello")
            res.redirect('/login');
            return;
        }

        const newFavourite = Favourites.create({
            user_id: req.session.user_id,
            recipe_id: req.params.id
        });
        console.log(newFavourite);
        res.status(200).json(newFavourite);
    }
    catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;
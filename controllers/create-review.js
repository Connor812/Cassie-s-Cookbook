const router = require('express').Router();
const { Review } = require('../models');
const date = require('../utils/helpers');

// Create new review
router.post('/', async (req, res) => {
    try {
        const newReviewData = await Review.create({
            username: req.session.username,
            recipe_id: req.body.recipe_id,
            description: req.body.description,
            date: date()
        });

        res.status(200).json(newReviewData);
    }
    catch (err) {
        res.status(500).json(err);
    };
});

module.exports =  router;
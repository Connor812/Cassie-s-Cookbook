const router = require('express').Router();
const { Review } = require('../../models');
const date = require('../../utils/helpers');

// Create new review
router.post('/', async (req, res) => {
    try {
        const newReviewData = await Review.create({
            user_id: req.session.user_id,
            recipe_id: 1, // Where do we get recipe_id from
            description: req.body.description,
            date: date()
        });
        res.status(200).json(newReviewData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    };
});

module.exports =  router;
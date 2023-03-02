const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipe-routes');
const favouriteRoutes = require('./favourites');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/favourites', favouriteRoutes);

module.exports = router;

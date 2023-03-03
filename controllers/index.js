const router = require('express').Router();
const loginRouter = require('./login-routes.js');
const signupRoutes = require('./signup-routes');
const homeRoutes = require('./homepage-router');
const createRecipeRouter = require('./create-recipe-router');
const favouriteRouter = require('./favourites');
const createReview = require('./create-review');
const dashboardRouter = require('./dashboard-router');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRouter);
router.use('/create_recipe', createRecipeRouter);
router.use('/favourites', favouriteRouter);
router.use('/create_review', createReview);
router.use('/dashboard', dashboardRouter);
router.use('/', homeRoutes);

module.exports = router;
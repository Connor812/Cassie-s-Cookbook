const router = require('express').Router();
const loginRouter = require('./login-routes.js');
const signupRoutes = require('./signup-routes');
const homeRoutes = require('./homepage-router');
const createRecipeRouter = require('./create-recipe-router');
const reviewRouter = require('./review-router');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRouter);
router.use('/create_recipe', createRecipeRouter);
router.use('/', homeRoutes);
router.use('/reviews', reviewRouter);

module.exports = router;
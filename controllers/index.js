const router = require('express').Router();
const loginRouter = requier('./login-routes.js');
const signupRoutes = require('./signup-routes');
const homeRoutes = require('./homepage-router');
const createRecipeRouter = require('./create-recipe-router');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/signup', signupRoutes);
router.use('/login', loginRouter);
router.use('/create_recipe', createRecipeRouter);
router.use('/', homeRoutes);

module.exports = router;
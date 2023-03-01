const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('create-recipe', {
        loggedIn: req.session.loggedIn,
        username: req.session.username
    });
});


module.exports = router;
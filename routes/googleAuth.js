const passport = require('passport');
const router = require("express").Router();



router.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })

    // (req, res) => {
    //     res.send('/auth/google is connected');
    // }
);

router.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/discover');

    }
);

router.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
    res.send(req.user);
});


module.exports = router;


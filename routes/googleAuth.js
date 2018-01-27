// const mongoose = require('mongoose');
// const passport = require('passport');
// const bodyParser = require('body-parser');
// const router = require("express").Router();

// const User = mongoose.model('User');

// module.exports = (app) => {

//     // app.use(bodyParser.urlencoded({ extended: true }));
//     // app.use(bodyParser.json());

//     app.get(
//         '/auth/google',
//         passport.authenticate('google', {
//             scope: ['profile', 'email']
//         })
//     );

//     app.get(
//         '/auth/google/callback',
//         passport.authenticate('google'),
//         (req, res) => {
//             res.redirect('/discover');
//         });

//     app.get('/api/logout', (req, res) => {
//         req.logout();
//         res.redirect('/');
//     });

//     app.get('/api/current_user', (req, res) => {
//         res.send(req.user);
//     })
// };


const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const router = require("express").Router();
// const postController = require("../../controllers/postController");


// Matches with "/api/post"
router.route("/")
    .get(
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );
    

// Matches with "/api/newpost/:id"
// router.route("/:id")
//     .get(postController.findById)
//     .put(postController.update)
//     .delete(postController.remove);

module.exports = router;

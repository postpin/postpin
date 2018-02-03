const router = require("express").Router();
const postController = require("../../controllers/postController");
const db = require("../../models");
const requireLogin = require('../../middlewares/requireLogin');

// Matches with "/api/post"
router.route("/")
  .get(postController.findAll)
  .post(postController.create);


// Matches with "/api/posts/:id"
router.route("/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove);

// this route is "/api/post/:id/comments"
router.post("/:id/comments", function (req, res) {
  console.log(req.body);
  
  // newComment = new db.Comment(req.body)
  // newComment._post = req.params.id;
  // newComment.body = req.body.body
  // newComment.userName = req.body.userName

  // newComment.save((err, comment) => {
  //   if (err) {
  //     res.send(err);
  //   }
  //   res.json(comment);
  // });
});


// //this route is "/api/post/:id/comments"
// router.post("/:id/comments", requireLogin, function (req, res) {
//   console.log('testing req in the post: ', req.params);
//   console.log('req.user: ', req.user)

//   newComment = new db.Comment()
//   newComment._post = req.params.id;
//   newComment.body = req.body.body

//   newComment.save((err, comment) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(comment);
//   });

// });







module.exports = router;

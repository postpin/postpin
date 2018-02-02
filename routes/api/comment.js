const router = require("express").Router();
const commentController = require("../../controllers/commentController");
const mongoose = require("mongoose");
const db = require("../../models");




// Matches with "/api/comments" and sort 
router.route("/")
  .get(commentController.findAll)
  .put(commentController.update)
  .post(commentController.create);


router.route("/:id")
  .get(commentController.findById)
  .put(commentController.update)
  .delete(commentController.remove);


  
// Matches with "/api/comments/:id"
//Creating the comment and tieing it to post image  - But how to tie it to users 
router.post("/", function (req, res) {
  console.log('testing req in the post of api/comment: ', req);
  
  db.Comment
    .create(req.body) //req.user.id req.post.id
    .then(function (dbComment) {
      db.Post.findOneAndUpdate({ _id: "5a712b54f095191006ddfb10" }, { $push: { comment: dbComment._id }}, { new: true });
      db.User.findOneAndUpdate({ _id: "5a700e2e528a9f066b2a5fae" }, { $push: { comment: dbComment._id } }, { new: true });
    })
    .then(function (dbUpate) {
      res.json(dbUpdate);
    })
    .catch(function (err) {
      res.json(err);
    });
});




router.post("/like/", function (req, res) {
  db.Comment
    .update(req.body)
    .then(function (dbComment) {
      return db.Comment.findOneAndUpdate({ _id: req.params.id }, { $inc: { 'comment.likeTotal': 1 } });
    })
    .then(function (dbComment) {
      res.json(dbComment);
    })
    .catch(function (err) {
      res.json(err);
    });
});



// return db.Comment.findOneAndUpdate({ _id: req.params.id }, { likeTotal: +1 }, { new: true });


module.exports = router;

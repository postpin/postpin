const router = require("express").Router();
const userController = require("../../controllers/commentController");
const mongoose = require("mongoose");


// Matches with "/api/comments" and sort 
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/comments/:id"
//Creating the comment and tieing it to post image  - But how to tie it to users 
router.post("/:id", function (req, res) {
  db.Comment
    .create(req.body)
    .then(function (dbComment) {
      return db.Post.findOneAndUpdate({ _id: req.params.id }, { comment: dbComment._id }, { new: true });
    })
    .then(function (dbPost) {
      res.json(dbPost);
    })
    .catch(function (err) {
      res.json(err);
    });
});



//Adding likes to the comment "/api/comments/likes/:id"
router.post("/likes/", function (req, res) {
  db.Comment
    .update(req.body)
    .then(function (dbComment) {
      return db.Comment.findOneAndUpdate({ _id: req.params.id }, { comment: dbComment._id }, { likeTotal: +1 }, { new: true });
    })
    .then(function (dbComment) {
      res.json(dbComment);
    })
    .catch(function (err) {
      res.json(err);
    });
});



module.exports = router;

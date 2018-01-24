const router = require("express").Router();
const postController = require("../../controllers/postController");

// Matches with "/api/post"
router.route("/newpost")
  .get(postController.findAll)
  .post(postController.create);

// Matches with "/api/newpost/:id"
router.route("/post/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove);

module.exports = router;

const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/newcomments")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/newuser/:id"
router.route("/comment/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;

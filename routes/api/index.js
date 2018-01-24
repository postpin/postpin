const router = require("express").Router();
const userRoutes = require("./user");
const postRoutes = require("./post");
const commentRoutes = require("./comment");
// user routes
router.use("/user", userRoutes);
router.use("/posts", postRoutes);
router.use("/comment", commentRoutes);
module.exports = router;

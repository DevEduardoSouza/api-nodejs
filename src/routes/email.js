const router = require("express").Router();
const emailController = require("../controllers/emailController");

router.route("/email").post((req, res) => {
  emailController.create(req, res);
});

router.route("/email").get((req, res) => {
  emailController.getAll(req, res);
});

router.route("/email/:id").get((req, res) => {
  emailController.getById(req, res);
});

module.exports = router;

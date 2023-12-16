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

router.route("/email/email/:email").get((req, res) => {
  emailController.getByEmail(req, res);
});

router.route("/email/:id").delete((req, res) => {
  emailController.deleteById(req, res);
});

router.route("/email/:id").put((req, res) => {
  emailController.update(req, res);
});

module.exports = router;

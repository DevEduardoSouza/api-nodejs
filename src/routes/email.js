const router = require("express").Router();
const emailController = require("../controllers/emailController");

router.route("/email").post((req, res) => {
  console.log("Chegou na rota POST /api/email");
  console.log(req.body);
  emailController.create(req, res);
});

module.exports = router;

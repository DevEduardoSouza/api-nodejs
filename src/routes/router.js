const router = require("express").Router();

const emailRouter = require("./email");

router.use("/", emailRouter);
module.exports = router;

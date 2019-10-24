const express = require("express");
const router = express.Router();

router.use("/users", require("./signup"));
router.use("/users", require("./login"));
router.use("/posts", require("./donate_posts"))

module.exports = router;
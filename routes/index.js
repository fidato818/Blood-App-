const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/posts", require("./donate_posts"))

module.exports = router;
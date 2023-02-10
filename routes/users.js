var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/item", function (req, res, next) {
  res.send("item");
});

module.exports = router;

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/user", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/product", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/test", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/ddd", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

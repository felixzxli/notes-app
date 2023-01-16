var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect("/api"); // redirect to the API router
});

module.exports = router;

const express = require('express');
const router = express.Router();
const userRouter = require("./users");

router.use('/user', userRouter);

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("API home page reached!")
    res.render('index', { title: 'Express' });
});


module.exports = router;

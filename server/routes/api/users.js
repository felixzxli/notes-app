const express = require('express');
const router = express.Router();
const userController = require("../../controllers/userController");
/* Users home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'User home' });
});

router.post('/createUser', userController.createNewUser);

router.post('/updateUser', userController.updateUser);

router.post('/deleteUser', userController.deleteUser);

module.exports = router;

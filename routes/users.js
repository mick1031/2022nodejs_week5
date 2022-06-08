var express = require('express');
const handleErrorAsync = require('../service/handleErrorAsync');
const UserController = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', handleErrorAsync(UserController.get));

router.post('/', handleErrorAsync(UserController.post));

router.options('/', function (req, res, next) {
  res.status(200).send("");
});

module.exports = router;

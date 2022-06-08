var express = require('express');
const handleErrorAsync = require('../service/handleErrorAsync');
const UserController = require('../controllers/UserController');
var router = express.Router();

/* GET users listing. */
router.get('/', handleErrorAsync(UserController.Get));

router.post('/', handleErrorAsync(UserController.Post));

module.exports = router;

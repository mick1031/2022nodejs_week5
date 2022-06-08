var express = require('express');
const PostController = require('../controllers/PostController');
const handleErrorAsync = require('../service/handleErrorAsync');
var router = express.Router();

/* GET users listing. */
router.get('/', handleErrorAsync(PostController.get));

router.post('/', handleErrorAsync(PostController.post));

router.patch('/:id', handleErrorAsync(PostController.patch));

router.delete('/:id', handleErrorAsync(PostController.delete));

router.delete('/', handleErrorAsync(PostController.deleteAll));

router.get('/error', handleErrorAsync(PostController.error));

router.options('/', function (req, res, next) {
  res.status(200).send("");
});

module.exports = router;

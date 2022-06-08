var express = require('express');
const appError = require('../service/appError');
const handleErrorAsync = require('../service/handleErrorAsync');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', handleErrorAsync(function (req, res, next) {
  if (req.body.content == undefined) {
    return next(appError(400, '你沒填寫 Content 資料', next));
  }

  res.status(200).json({
    status: 'success',
  });
}))

router.get('/error', handleErrorAsync(function (req, res, next) {
  new Error('test');
}))

router.options('/', function (req, res, next) {
  res.status(200).send("");
});

module.exports = router;

var express = require('express');
const appError = require('../service/appError');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
    if (req.body.content == undefined) {
        return next(appError(400, '你沒填寫 Content 資料', next));
    }

    res.status(200).json({
      status: 'success',
    });
})

module.exports = router;

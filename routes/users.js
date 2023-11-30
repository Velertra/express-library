var express = require('express');
var router = express.Router();
/* var coolRouter = require('./routes/cool');


app.use('/users/cool', coolRouter);

 */
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

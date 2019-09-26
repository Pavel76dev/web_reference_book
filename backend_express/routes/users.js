var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
    id: 1,
    username: "Павел"
  }, {
    id: 2,
    username: "Stop123"
  }, {
    id: 2,
    username: "вапвап123"
  }]);
});

module.exports = router;

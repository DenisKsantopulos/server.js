var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res, next) {
  res.send('Hello v1.0 GET API');
});
 
router.post('/', function(req, res, next) {
  res.send('Hello v1.0 POST API');
});
 
module.exports = router;
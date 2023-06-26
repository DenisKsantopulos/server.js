var express = require('express');
var router = express.Router();
 
router.use('/v1.0', require('./v1.0'));
router.use('/v2.0/configs', require('./v2.0/configs'));
/* router.use('/v2.0/controllers', require('./v2.0/controllers'));
router.use('/v2.0/services', require('./v2.0/services')); */

module.exports = router;
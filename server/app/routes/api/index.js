var router = require('express').Router();

router.use('/hats', require('./hats'));
router.use('/user', require('./user'));
router.use('/reviews', require('./reviews'));
module.exports = router;
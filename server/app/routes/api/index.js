var router = require('express').Router();

router.use('/hats', require('./hats'));
router.use('/user', require('./user'));
module.exports = router;
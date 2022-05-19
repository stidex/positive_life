const router = require('express').Router();
const indexRegister = require('./api/register.js');

router.use('/register',indexRegister);

module.exports = router;
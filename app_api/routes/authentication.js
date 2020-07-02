var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');

var auth = jwt({
  secret: 'thisIsSecret',
  _userProperty: 'payload'
});

var ctrlAuth = require('../controllers/authentication');

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
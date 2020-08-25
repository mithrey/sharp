const express = require('express');
const router = express.Router();

const jwt = require('express-jwt');

const auth = jwt({
  secret: 'thisIsSecret',
  _userProperty: 'payload'
});

const ctrlAuth = require('../controllers/authentication');

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
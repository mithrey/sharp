var express = require('express');
var router = express.Router();

var jwt = require('express-jwt');

var auth = jwt({
    secret: 'thisIsSecret',
    _userProperty: 'payload'
});

var ctrlTransaction = require('../controllers/transaction');


router.post('/pay', ctrlTransaction.pay);

module.exports = router;
const express = require('express');
const router = express.Router();

const jwt = require('express-jwt');

const auth = jwt({
    secret: 'thisIsSecret',
    _userProperty: 'payload'
});

const ctrlTransaction = require('../controllers/transaction');

router.get('/history', ctrlTransaction.getHistory);
router.post('/pay', ctrlTransaction.pay);

module.exports = router;
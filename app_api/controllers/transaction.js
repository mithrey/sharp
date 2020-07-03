const User = require('../models/user');
const Transaction = require('../models/transaction');
const db = require('../models/db');
const Op = db.Sequelize.Op;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = 'thisIsSecret';

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};



module.exports.getHistory = async function(req, res){
    var authorization = req.headers.authorization.split(' ')[1],
    decoded;
    try {
        decoded = jwt.verify(authorization, secret);
    } catch (e) {
        return sendJsonResponse(res, 400, 'JWT error');
    }

    Transaction.findAll({
        where:{
            [Op.or] : {sender: decoded._id, recipient: decoded._id}
        }
    }).then(tr => {
        console.log('trs!', tr.map(x => x.dataValues));
        sendJsonResponse(res, 200, tr.map(x => x.dataValues));
    }).catch(e => {
        console.log('error', e);
        sendJsonResponse(res, 400, 'error')
    });
}

module.exports.pay = async function (req, res) {
    var email = req.body.recipient;
    var amount = req.body.amount;
    var authorization = req.headers.authorization.split(' ')[1],
    decoded;
    try {
        decoded = jwt.verify(authorization, secret);
    } catch (e) {
        return sendJsonResponse(res, 400, 'JWT error');
    }
    
    var sender = await User.findOne({
        where:{
            id: decoded._id
        }
    });
    var senderBalance = sender.dataValues.balance;

    if(senderBalance < amount){
        return sendJsonResponse(res, 400, {code: 1010, message: 'Not sufficient funds'});
    }

    var recipient = await User.findOne({
        where:{
            email: email
        }
    })

    if(!recipient){
        return sendJsonResponse(res, 400, {code: 1011, message: 'Invalid recipient'});
    }
    var recipientBalance = recipient.dataValues.balance;

    const t = await db.sequelize.transaction();

    try {
        var trObject = {
            sender: sender.dataValues.id,
            recipient: recipient.dataValues.id,
            amount: amount
        };
        await Transaction.create(trObject);

        await sender.update({
            balance: senderBalance-amount
        });
        await recipient.update({
            balance: recipientBalance+amount
        });
    } catch(e){
        console.log('transaction error', e);
        await t.rollback();
        return sendJsonResponse(res, 400, {code: 1012, message: 'transaction error'});

    }

    sendJsonResponse(res, 200, 'success');
};

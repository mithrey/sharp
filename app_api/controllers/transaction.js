const User = require('../models/user');
const Transaction = require('../models/transaction');
const db = require('../models/db');
const Op = db.Sequelize.Op;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = 'thisIsSecret';
const { sendMessage } = require('../../socket');

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
        return sendJsonResponse(res, 400, {code: 1020, message: 'JWT error'});
    }

    Transaction.findAll({
        
        where:{
            [Op.or] : {sender: decoded._id, recipient: decoded._id}
        },
        order: [
            ['createdAt', 'DESC'],
        ]
    }).then( async tr => {
        for(let i = 0; i < tr.length; i++){
            let sender = await User.findOne({where:{id:tr[i].dataValues.sender}})
            tr[i].dataValues.senderEmail = sender.dataValues.email;
            let recipient = await User.findOne({where:{id:tr[i].dataValues.recipient}})
            tr[i].dataValues.recipientEmail = recipient.dataValues.email;
        }
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
        return sendJsonResponse(res, 400, {code: 1020, message: 'JWT error'});
    }
    
    var sender = await User.findOne({
        where:{
            id: decoded._id
        }
    });
    var senderBalance = sender.dataValues.balance;
    if(sender.dataValues.email == recipient){
        return sendJsonResponse(res, 400, {code: 1013, message: 'Invalid email'});
    }
    if(senderBalance < amount){
        return sendJsonResponse(res, 400, {code: 1010, message: 'Not sufficient funds'});
    }

    if(amount <= 0){
        return sendJsonResponse(res, 400, {code: 1010, message: 'Amount should be greater than 0'});
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
    sendMessage(sender.dataValues.id, recipient.dataValues.id);

    sendJsonResponse(res, 200, 'success');
};

const passport = require('passport');
const User = require('../models/user');
const Transaction = require('../models/transaction');
const registrationBonus = 500;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');



const validateEmail = function (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const setPassword = function(password, salt){
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash;
};



const generateJwt = function(name, id){
    let expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: id,
        name: name,
        exp: parseInt(expiry.getTime()/1000)
    }, 'thisIsSecret');
};


const sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

module.exports.register = async function (req, res) {
    let email = req.body.email;
    let name = req.body.name;
    let password = req.body.password;


    if(!name || !password || !email){
        return sendJsonResponse(res, 400, {
            code: 1000,
            "message": "fields 'name', 'email' and 'password' required"
        });
    }

    if(!validateEmail(email)){
        return sendJsonResponse(res, 400, {
            code: 1001,
            "message": "invalid email"
        });
        
    }
    let alreadyRegistered = await User.findOne({where:{email:email}});
    if(alreadyRegistered){
        return sendJsonResponse(res, 400, {
            code: 1006,
            "message": "email already registered"
        });
    }

    let salt = crypto.randomBytes(16).toString('hex');
    let userData = {
        name: name,
        email: email,
        salt: salt,
        hash: setPassword(password, salt),
        balance: registrationBonus,
    };
    
    User.create(userData)
        .then(async user => {
            console.log("created", user);
            let trObject = {
                sender: -1,
                recipient: user.id,
                amount: registrationBonus
            };
            await Transaction.create(trObject);
            token = generateJwt(user.name, user.id);
            sendJsonResponse(res, 200, {
               "token": token
            });
        })
        .catch(err => sendJsonResponse(res, 400, {code: 1005, message:"Registration error"}))

};

module.exports.login = function (req, res) {
    if(!req.body.email || !req.body.password){
        sendJsonResponse(res, 400, {
            "message": "fields 'user' and 'password' required"
        });
        return;
    }


    passport.authenticate('local',{}, function (err, user, info) {
       let token;

       console.log('req', user);
       if(err){
        console.log('err', err);
           sendJsonResponse(res, 404, err);
           return;
       }

       if(user){
           token = generateJwt(user.name, user.id); 
           sendJsonResponse(res, 200, {
               token: token,
               name: user.name,
               balance: user.balance,
               id: user.id,
               email: user.email
           });
       } else {
           sendJsonResponse(res, 401, info);
       }

    })(req, res);
};


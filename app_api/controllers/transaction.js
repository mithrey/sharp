


//console.log(accountSid, authToken, twilioClient);
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.pay = async function (req, res) {
    sendJsonResponse(res, 200, 'success');

};

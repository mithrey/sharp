const debug = require('debug')('test:app.js');
//var createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
require('./app_api/models/db');
require('./app_api/config/passport');

const app = express();
const expressWs = require('express-ws')(app);



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());


/**
 * HTTP routing -- begin
 */

var authApi = require('./app_api/routes/authentication');
app.use('/api', authApi);

var transactionApi = require('./app_api/routes/transaction');
app.use('/api', transactionApi);


app.use('/', express.static(path.join(__dirname, 'app_client/dist')));


/**
 * HTTP routing -- end
 */

module.exports = app;

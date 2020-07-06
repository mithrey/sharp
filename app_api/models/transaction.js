const Sequelize = require('sequelize');
const db = require('./db');
const User = require('../models/user');

var Transaction = db.sequelize.define('transaction',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  sender: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  recipient: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});


module.exports = Transaction;

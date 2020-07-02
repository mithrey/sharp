const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.sequelize.define('transaction',{
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
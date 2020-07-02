
const Sequelize = require('sequelize');
const db = require('./db');


module.exports = db.sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salt: {
        type: Sequelize.STRING,
        allowNull: false
    },
    balance: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
//////////////////////////////////////



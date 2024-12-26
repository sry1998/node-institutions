const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const University = sequelize.define('University', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = University;
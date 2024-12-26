const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const ExamTypes = sequelize.define('ExamTypes', {
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

module.exports = ExamTypes;
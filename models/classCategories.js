const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const ClassCategory = sequelize.define('ClassCategory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = ClassCategory;
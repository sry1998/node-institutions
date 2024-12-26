const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const InstitueType = sequelize.define('InstituteType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    types: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = InstitueType;
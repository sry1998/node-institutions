const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const InstituteType = sequelize.define('InstituteType', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    types: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'InstituteType',
    timestamps: false,
})

module.exports = InstituteType;
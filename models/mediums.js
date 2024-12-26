const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const Medium = sequelize.define('Medium', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    tableName: 'Medium',
    timestamps: false,
})

module.exports = Medium;
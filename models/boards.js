const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const Board = sequelize.define('Board', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'Board',
    timestamps: false,
})

module.exports = Board;
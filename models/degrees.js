const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const Degree = sequelize.define('Degree', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'Degree',
    timestamps: false,
})

module.exports = Degree;
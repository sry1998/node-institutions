const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const ClassCategory = require('./classCategories');
const Standard = sequelize.define('Standard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    stdName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ClassCategory',
            key: 'id',
        }
    },
},{
    tableName: 'Standard',
    timestamps: false,
})

module.exports = Standard;
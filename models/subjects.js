const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const Subject = sequelize.define('Subject', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    subName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: 'Subject',
    timestamps: false,
})

module.exports = Subject;
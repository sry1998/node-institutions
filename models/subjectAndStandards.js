const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const Subject = require('./subjects');
const Standard = require('./standards');
const SubjectAndStandard = sequelize.define('SubjectAndStandard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    standard: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Standard',
            key: 'id',
        }
    },
    subject: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Subject',
            key: 'id',
        }
    }
})

module.exports = SubjectAndStandard
;
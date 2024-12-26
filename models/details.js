const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../db');
const InstitueType = require('./institutetypes');
const Medium = require('./mediums');
const SubjectAndStandard = require('./subjectAndStandards');
const Degree = require('./degrees');
const University = require('./universities');
const ExamTypes = require('./examTypes');
const Detail = sequelize.define('Detail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instituteType: {
        type: DataTypes.INTEGER,
        references: {
            model: 'InstitueType',
            key: 'id',
        },
        allowNull: false,
    },
    board: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Board',
            key: 'id',
        },
        allowNull: true,
    },
    medium: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Medium',
            key: 'id',
        },
        allowNull: true,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ClassCategory',
            key: 'id',
        },
        allowNull: true,
    },
    subAndStdId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'SubjectAndStandard',
            key: 'id',
        },
        allowNull: true,
    },
    degreeId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Degree',
            key: 'id',
        },
        allowNull: true,
    },
    universityId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'University',
            key: 'id',
        },
        allowNull: true,
    },
    examTypeId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ExamTypes',
            key: 'id',
        },
        allowNull: true,
    }
})

module.exports = Detail;
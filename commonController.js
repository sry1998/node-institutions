const Detail = require('./models/details');

const InstitueType = require('./models/institutetypes');
const Board = require('./models/boards');
const ClassCategory = require('./models/classCategories');
const Degree = require('./models/degrees');
const ExamTypes = require('./models/examTypes');
const Medium = require('./models/mediums');
const Standard = require('./models/standards');
const SubjectAndStandard = require('./models/subjectAndStandards');
const Subject = require('./models/subjects');
const University = require('./models/universities');

const getInsitiute = async (req, res) => {
    try {
        const instituteType = await InstitueType.findAll({});
        res.send(instituteType);
    } catch(err) {
        console.log('Error::', err)
    }
}

const getMedium = async (req, res) => {
    try {
        const medium = await Medium.findAll({});
        res.send(medium);
    } catch(err) {
        console.log('Error::', err)
    }
}

const getDegree = async (req, res) => {
    try {
        const degree = await Degree.findAll({});
        res.send(degree);
    } catch(err) {
        console.log('Error::', err)
    }
}

const getBoards = async (req, res) => {
    try {
        const board = await Board.findAll({});
        res.send(board);
    } catch(err) {
        console.log('Error::', err)
    }
}

const getClassCategory = async (req, res) => {
    try {
        const classCategory = await ClassCategory.findAll({});
        res.send(classCategory);
    } catch(err) {
        console.log('Error::', err)
    }
}

const getUniversirty = async (req, res) => {
    try {
        const universities = await University.findAll({});
        res.send(universities);
    } catch(err) {
        console.log('Error::', err)
    }
}

const getExamTypes = async (req, res) => {
    try {
        const examtypes = await ExamTypes.findAll({});
        res.send(examtypes);
    } catch(err) {
        console.log('Error::', err)
    }
}

const getStandards = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const standard = await Standard.findAll({
            where: {categoryId}
        });
        res.send(standard);
    } catch(err) {
        console.log('Error::', err)
    }
}

const getSubjects = async (req, res) => {
    try {
        const standard = req.params.id;
        const subject = await SubjectAndStandard.findAll({
            where: {standard},
            include: [{model: Subject, attributes: ['subName']}, {model: Standard, attributes: ['stdName']}]
        });
        res.send(subject);
    } catch(err) {
        console.log('Error::', err)
    }
}

const addDetail = async (req, res) => {
    try {
        const info = {
            name: req.body.name,
            instituteType: req.body.instituteType,
            board: req.body.board || null,
            medium: req.body.medium || null,
            categoryId: req.body.categoryId || null,
            subAndStdId: req.body.subAndStdId || null,
            degreeId: req.body.degreeId || null,
            universityId: req.body.universityId || null,
            examTypeId: req.body.examTypeId

        };
        const newDetail = await Detail.create(info);
        res.send(newDetail);
    } catch(err) {
        console.log('Error::', err)
    }
}

module.exports = {getInsitiute, getBoards, getMedium, getClassCategory, getDegree, getUniversirty, getSubjects, getStandards, getExamTypes, addDetail}
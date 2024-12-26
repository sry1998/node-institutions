const express = require('express');
const { getInsitiute, getMedium, getDegree, getBoards, getClassCategory, getUniversirty, getExamTypes, getStandards, getSubjects, addDetail } = require('./commonController');
const router  = express.Router();

router.get('/institute-types', getInsitiute);
router.get('/medium', getMedium);
router.get('/degree', getDegree)
router.get('/board', getBoards)
router.get('/class-category', getClassCategory)
router.get('/universities', getUniversirty)
router.get('/exam-types', getExamTypes)
router.get('/standards/:id', getStandards)
router.get('/subjects/:id', getSubjects)
router.post('/add', addDetail);


module.exports = router;
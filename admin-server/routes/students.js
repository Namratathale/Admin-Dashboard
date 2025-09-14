 
const express = require('express');
const router = express.Router();
const { getStudents } = require('../controllers/studentController');

//all students
router.get('/', getStudents);

module.exports = router;

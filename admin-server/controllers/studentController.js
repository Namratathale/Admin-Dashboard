 
const Student = require('../models/Student');

// @desc    Get all students
// @route   GET /api/students
// @access  Public (for now; can be protected later)
const getStudents = async (req, res) => {
  try {
    // ost recently created
    const students = await Student.find({}).sort({ createdAt: -1 });
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Server error while fetching students' });
  }
};

module.exports = {
  getStudents,
};

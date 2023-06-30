const asyncHandler = require('express-async-handler')
const { successResponse } = require('../utils/apiResponse')
const Student = require('../models/studentModel')



// @desc    Add student
// @route   POST /api/students
// @access  Public
const createStudent = asyncHandler(async (req, res) => {
    const student = await Student.create({
        name: req.body.name,
        parentName: req.body.parentName,
        parentPhoneNum: req.body.parentPhoneNum,
        profilePic: req.body.profilePic,
        address: req.body.address,
        dob: req.body.dob,
        gender: req.body.gender,
        nis: req.body.nis,
        nisn: req.body.nisn,
        semester: req.body.semester,
        academicYear: req.body.academicYear,
        peminatan: req.body.peminatan,
    })

    successResponse(res, 'New student successfully created', student, 201)
})

// @desc    Get all student data
// @route   GET /api/v1/student
// @access  Public
const getStudentData = asyncHandler(async (req, res) => {
    const students = await Student.find({});
    successResponse(res, 'Student data retrieved successfully', students);
});


const getStudentById = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id)
    
    if (!student) {
        res.status(404)
        throw new Error('Student not found')
    }
    
    successResponse(res, 'Student data retrieved successfully', student);
});


module.exports = {
    createStudent,
    getStudentData,
    getStudentById
}



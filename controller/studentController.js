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



module.exports = {
    createStudent
    
}



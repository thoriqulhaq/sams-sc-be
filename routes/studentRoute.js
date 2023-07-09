const express = require('express')
const router = express.Router()
const { createStudent, getStudentData, getStudentById } = require('../controller/studentController')

router.route('/').get(getStudentData).post(createStudent)
router.route('/:id').get(getStudentById)




module.exports = router

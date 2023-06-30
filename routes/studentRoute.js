const express = require('express')
const router = express.Router()
const { createStudent } = require('../controller/studentController')

router.route('/').post(createStudent)
router.route('/').get(getStudentData)




module.exports = router

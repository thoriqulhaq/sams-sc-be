const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    parentName: String,
    parentPhoneNum: String,
    profilePic: String,

    address:{
        type: String,
        required: true
    },

    dob: String,

    gender: {
        type: String,
        required: true
    },
    
    nis: {
        type: Number,
        required: true
    },

    nisn: String,
    semester: String,
    academicYear: String,
    peminatan: String,
})

module.exports = mongoose.model('Student', studentSchema)

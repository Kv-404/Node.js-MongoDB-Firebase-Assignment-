// Assignment 11: Student Model
// File: model/studentModel.js

const mongoose = require('mongoose');
const studentSchema = require('../schema/studentSchema');

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

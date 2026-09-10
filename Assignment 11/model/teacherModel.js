// Assignment 11: Teacher Model
// File: model/teacherModel.js

const mongoose = require('mongoose');
const teacherSchema = require('../schema/teacherSchema');

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;

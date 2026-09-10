// Assignment 9: User Model
// File: model/userModel.js

const mongoose = require('mongoose');
const userSchema = require('../schema/userSchema');

const User = mongoose.model('User', userSchema);

module.exports = User;

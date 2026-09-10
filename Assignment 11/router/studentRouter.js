// Assignment 11: Student Router
// File: router/studentRouter.js

const express = require('express');
const bcrypt = require('bcrypt');
const Student = require('../model/studentModel');

const router = express.Router();

// POST /student/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, course, age } = req.body;

        if (!name || !email || !password || !course || age === undefined) {
            return res.status(400).json({
                message: 'Please provide name, email, password, course and age'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const student = await Student.create({
            name,
            email,
            password: hashedPassword,
            course,
            age
        });

        const saved = student.toObject();
        delete saved.password;

        res.status(201).json({
            message: 'Student registered successfully',
            student: saved
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        console.error('Error registering student:', error.message);
        res.status(400).json({
            message: 'Failed to register student',
            error: error.message
        });
    }
});

module.exports = router;

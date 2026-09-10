// Assignment 11: Teacher Router
// File: router/teacherRouter.js

const express = require('express');
const bcrypt = require('bcrypt');
const Teacher = require('../model/teacherModel');

const router = express.Router();

// POST /teacher/register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, subject } = req.body;

        if (!name || !email || !password || !subject) {
            return res.status(400).json({
                message: 'Please provide name, email, password and subject'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const teacher = await Teacher.create({
            name,
            email,
            password: hashedPassword,
            subject
        });

        const saved = teacher.toObject();
        delete saved.password;

        res.status(201).json({
            message: 'Teacher registered successfully',
            teacher: saved
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email is already registered' });
        }

        console.error('Error registering teacher:', error.message);
        res.status(400).json({
            message: 'Failed to register teacher',
            error: error.message
        });
    }
});

module.exports = router;

// Assignment 8: User Router
// File: router/userRouter.js

const express = require('express');
const User = require('../model/userModel');

const router = express.Router();

// POST /api/users - add a new user to MongoDB
router.post('/', async (req, res) => {
    try {
        const { name, email, age, course } = req.body;

        if (!name || !email || age === undefined || !course) {
            return res.status(400).json({
                message: 'Please provide name, email, age and course'
            });
        }

        const user = await User.create({ name, email, age, course });

        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({
            message: 'Failed to create user',
            error: error.message
        });
    }
});

// GET /api/users - retrieve all users from MongoDB
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error.message);
        res.status(500).json({
            message: 'Failed to retrieve users',
            error: error.message
        });
    }
});

module.exports = router;

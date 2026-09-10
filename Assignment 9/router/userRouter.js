// Assignment 9: User Router
// File: router/userRouter.js

const express = require('express');
const mongoose = require('mongoose');
const User = require('../model/userModel');

const router = express.Router();

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}

// POST /api/users - add a new user (from Question 1)
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

// GET /api/users - retrieve all users (from Question 1)
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

// PATCH /api/users/:id - update an existing user
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ message: 'Invalid MongoDB ID' });
        }

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'Invalid request data' });
        }

        const user = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'User updated successfully',
            user
        });
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(500).json({
            message: 'Failed to update user',
            error: error.message
        });
    }
});

// DELETE /api/users/:id - delete a user
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({ message: 'Invalid MongoDB ID' });
        }

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(500).json({
            message: 'Failed to delete user',
            error: error.message
        });
    }
});

module.exports = router;

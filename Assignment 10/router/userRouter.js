// Assignment 10: User Router
// File: router/userRouter.js

const express = require('express');
const { getFirestore } = require('../config/firebase');
const { validateUser } = require('../schema/userSchema');

const router = express.Router();

// POST /api/users - validate and store a user in Firestore
router.post('/', async (req, res) => {
    try {
        const result = validateUser(req.body);

        if (!result.valid) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: result.errors
            });
        }

        const db = getFirestore();
        const docRef = await db.collection('users').add({
            ...result.value,
            createdAt: new Date()
        });

        res.status(201).json({
            message: 'User stored in Firestore successfully',
            id: docRef.id,
            user: result.value
        });
    } catch (error) {
        console.error('Error storing user:', error.message);
        res.status(500).json({
            message: 'Failed to store user in Firestore',
            error: error.message
        });
    }
});

module.exports = router;

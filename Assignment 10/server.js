// Assignment 10: Store Data in Firebase Firestore
// File: server.js

const express = require('express');
const { getFirestore } = require('./config/firebase');
const userRouter = require('./router/userRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(204);
    }
    next();
});

app.use(express.json());
app.use('/api/users', userRouter);

try {
    getFirestore();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
} catch (error) {
    console.error('Firebase connection failed:', error.message);
    process.exit(1);
}

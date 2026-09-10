// Assignment 7 - Task 2: Query Parameters
// File: queryParameters.js

const express = require('express');

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

app.get('/search', (req, res) => {
    const { name, course } = req.query;

    if (!name && !course) {
        return res.send('No search data provided.');
    }

    res.send(`Name: ${name}\nCourse: ${course}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

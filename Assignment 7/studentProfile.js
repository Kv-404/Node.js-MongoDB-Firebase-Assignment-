// Assignment 7 - Task 3: Student Profile using Route Parameters & Query Parameters
// File: studentProfile.js

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

app.get('/student/:id', (req, res) => {
    const { id } = req.params;
    const { name, course } = req.query;

    res.send(`Student ID: ${id}\nName: ${name}\nCourse: ${course}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

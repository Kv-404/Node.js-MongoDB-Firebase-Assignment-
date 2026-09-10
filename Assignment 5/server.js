// Assignment 5: Express.js Basic Routes
// File: server.js

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

// Task 5: Request-Response Understanding
// Logs HTTP method and URL for every incoming request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

// Task 1: Basic Routes
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
});

app.get('/contact', (req, res) => {
    res.send('This is Contact Page');
});

// Task 2: Route Parameter (Dynamic Route)
app.get('/user/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// Task 3: Multiple Route Parameters
app.get('/product/:id/:category', (req, res) => {
    res.send(`Product ID: ${req.params.id}, Category: ${req.params.category}`);
});

// Task 4: Query Parameters
app.get('/search', (req, res) => {
    res.send(`Name: ${req.query.name}, Role: ${req.query.role}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

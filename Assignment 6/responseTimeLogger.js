// Assignment 6 - Task 3: Response Time Middleware
// File: responseTimeLogger.js

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

// Custom middleware that measures how long each request takes
function responseTimeLogger(req, res, next) {
    const startTime = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - startTime;
        console.log(`${req.method} ${req.originalUrl} - ${duration} ms`);
    });

    next();
}

app.use(responseTimeLogger);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/products', (req, res) => {
    res.send('Product List');
});

app.get('/users', (req, res) => {
    res.send('User List');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

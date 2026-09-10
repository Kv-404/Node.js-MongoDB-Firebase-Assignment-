// Assignment 6 - Task 1: Router-Level Middleware
// File: routerMiddleware.js

const express = require('express');

const app = express();
const router = express.Router();
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

function getCurrentDateTime() {
    const date = new Date();
    const pad = (value) => String(value).padStart(2, '0');

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

// Custom router-level middleware
function routerLogger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl} ${getCurrentDateTime()}`);
    next();
}

// Middleware runs only for routes inside this router
router.use(routerLogger);

router.get('/students', (req, res) => {
    res.send('Students List');
});

router.get('/courses', (req, res) => {
    res.send('Courses List');
});

router.get('/faculty', (req, res) => {
    res.send('Faculty List');
});

// Mount the router at /api
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

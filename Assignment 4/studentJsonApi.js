// Assignment 3: Student JSON API
// File: studentJsonApi.js

const http = require('http');

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/student') {
        // Set response headers to JSON type
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        // JSON response body
        const studentData = {
            id: 101,
            name: "John",
            course: "BCA",
            semester: 4,
            city: "Mumbai"
        };
        
        // Send the JSON response stringified
        res.end(JSON.stringify(studentData, null, 2));
    } else {
        // Set status to 404 and return error message
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

// Run server on port 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

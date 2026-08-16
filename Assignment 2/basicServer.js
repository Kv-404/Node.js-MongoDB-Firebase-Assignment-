// Assignment 1: Basic HTTP Server
// File: basicServer.js

const http = require('http');

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send response body
    res.end('Welcome to Node.js Server');
});

// Run server on port 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

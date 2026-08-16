// Assignment 4: Route Handling Server
// File: routeHandlingServer.js

const http = require('http');

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Route matching
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to Home Page');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About Us');
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Contact Information');
            break;
        case '/services':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Our Services');
            break;
        default:
            // Handle invalid routes
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 - Page Not Found');
            break;
    }
});

// Run server on port 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

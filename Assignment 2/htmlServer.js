// Assignment 2: HTML Response Server
// File: htmlServer.js

const http = require('http');

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set response headers to HTML type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // HTML Content containing Student Portal details
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Portal</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 40px;
            background-color: #f4f6f9;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
        }
        .portal-card {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
            width: 100%;
            max-width: 500px;
            padding: 30px;
            border-top: 5px solid #3498db;
        }
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-top: 0;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px dashed #e2e8f0;
        }
        .info-group {
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        .label {
            font-weight: 600;
            color: #7f8c8d;
            display: inline-block;
            width: 90px;
        }
        .value {
            color: #2c3e50;
            font-weight: 500;
        }
        .welcome-message {
            margin-top: 25px;
            background-color: #ebf5fb;
            padding: 15px;
            border-left: 4px solid #3498db;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            color: #2980b9;
        }
    </style>
</head>
<body>
    <div class="portal-card">
        <h1>Student Portal</h1>
        <div class="info-group">
            <span class="label">Name:</span>
            <span class="value">Karamveer Singh Qaumi</span>
        </div>
        <div class="info-group">
            <span class="label">Course:</span>
            <span class="value">Full Stack Development</span>
        </div>
        <div class="info-group">
            <span class="label">College:</span>
            <span class="value">ITM Skills University</span>
        </div>
        <div class="welcome-message">
            Welcome to our Node.js application.
        </div>
    </div>
</body>
</html>
    `;

    // Send the response
    res.end(htmlContent);
});

// Run server on port 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

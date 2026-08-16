// Assignment 5: Personal Portfolio Server
// File: personalPortfolioServer.js

const http = require('http');

const PORT = 3000;

// Helper function to generate uniform HTML boilerplate for portfolio pages
function getPageHtml(title, heading, content) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f6fa;
            color: #2f3640;
        }
        header {
            background-color: #2f3640;
            color: #f5f6fa;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        header h2 {
            margin: 0;
            font-size: 1.8rem;
            letter-spacing: 1px;
        }
        nav {
            margin-top: 15px;
        }
        nav a {
            color: #00a8ff;
            text-decoration: none;
            margin: 0 15px;
            font-size: 1.1rem;
            font-weight: 600;
            transition: color 0.2s ease-in-out;
        }
        nav a:hover {
            color: #ffffff;
            border-bottom: 2px solid #00a8ff;
            padding-bottom: 3px;
        }
        main {
            max-width: 800px;
            margin: 40px auto;
            background: #ffffff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        h1 {
            color: #2f3640;
            margin-top: 0;
            border-bottom: 3px solid #f5f6fa;
            padding-bottom: 10px;
        }
        p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #3f3f3f;
        }
        ul {
            padding-left: 20px;
            font-size: 1.1rem;
            line-height: 1.8;
        }
        li {
            margin-bottom: 12px;
        }
        footer {
            text-align: center;
            padding: 20px 0;
            margin-top: 50px;
            color: #7f8c8d;
            font-size: 0.95rem;
            border-top: 1px solid #dcdde1;
        }
    </style>
</head>
<body>
    <header>
        <h2>Developer Portfolio</h2>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About Me</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>
    <main>
        <h1>${heading}</h1>
        <div>${content}</div>
    </main>
    <footer>
        &copy; 2026 Developer Portfolio. Built using only the Node.js http module.
    </footer>
</body>
</html>
    `;
}

// Create HTTP server
const server = http.createServer((req, res) => {
    let title = '';
    let heading = '';
    let content = '';
    let statusCode = 200;

    // Routing Logic
    switch (req.url) {
        case '/':
            title = 'Home | Developer Portfolio';
            heading = 'Welcome to My Portfolio';
            content = `
                <p>Hello! I am a full-stack developer specializing in Node.js, JavaScript, and database systems. This portfolio site demonstrates a complete multi-route web page served entirely using Node.js's native <strong>http</strong> module without any external frameworks.</p>
                <p>Feel free to click through the navigation links in the header to explore the different sections of this site!</p>
            `;
            break;
        case '/about':
            title = 'About Me | Developer Portfolio';
            heading = 'About Me';
            content = `
                <p>I build web systems, backend APIs, and frontend applications. My engineering philosophy revolves around simplicity, performance, and user-centric design.</p>
                <p>I have experience collaborating with cross-functional teams to build web applications that deliver rich user experiences and scale seamlessly.</p>
            `;
            break;
        case '/skills':
            title = 'Skills | Developer Portfolio';
            heading = 'Technical Skills';
            content = `
                <p>Here are the technologies and tools I work with daily:</p>
                <ul>
                    <li><strong>Languages:</strong> JavaScript (ES6+), Python, HTML5, CSS3, SQL</li>
                    <li><strong>Backend Development:</strong> Node.js, Express, REST APIs, HTTP protocols</li>
                    <li><strong>Databases:</strong> MongoDB, Firebase, PostgreSQL, MySQL</li>
                    <li><strong>DevOps & Tools:</strong> Git, GitHub, Docker, npm</li>
                </ul>
            `;
            break;
        case '/projects':
            title = 'Projects | Developer Portfolio';
            heading = 'My Projects';
            content = `
                <p>Select highlights of my recent projects:</p>
                <ul>
                    <li><strong>Task Manager Dashboard</strong> - A productivity tracker with authentication, session state, and database persistence.</li>
                    <li><strong>Student Information Portal</strong> - A Node.js backend server supporting routing, HTML page responses, and REST API endpoints.</li>
                    <li><strong>E-Commerce Catalog Server</strong> - A fast API endpoint serving item listings, ratings, and checkout calculation.</li>
                </ul>
            `;
            break;
        case '/contact':
            title = 'Contact | Developer Portfolio';
            heading = 'Contact Details';
            content = `
                <p>I would love to connect with you! You can reach me through the following channels:</p>
                <ul>
                    <li><strong>Email:</strong> developer@example.com</li>
                    <li><strong>GitHub:</strong> github.com/myusername</li>
                    <li><strong>LinkedIn:</strong> linkedin.com/in/myusername</li>
                    <li><strong>Location:</strong> Mumbai, India</li>
                </ul>
            `;
            break;
        default:
            // Handle invalid routes
            statusCode = 404;
            title = '404 - Page Not Found';
            heading = '404 - Page Not Found';
            content = `
                <p>The page you are looking for does not exist or has been moved.</p>
                <p><a href="/" style="color: #00a8ff; font-weight: 600; text-decoration: none;">&larr; Back to Home</a></p>
            `;
            break;
    }

    // Set response headers and send generated HTML
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(getPageHtml(title, heading, content));
});

// Run server on port 3000
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

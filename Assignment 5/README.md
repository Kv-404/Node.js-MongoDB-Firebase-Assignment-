# Assignment 5: Express.js Basic Routes

This assignment creates a simple Express server that covers basic routes, dynamic route parameters, query parameters, and request logging.

## How to run the server

1. Open a terminal and navigate to the **Assignment 5** directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   or
   ```bash
   node server.js
   ```
4. Open a browser or use `curl` to visit `http://localhost:3000`.

## Explanation of routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/about` | About page |
| GET | `/contact` | Contact page |
| GET | `/user/:name` | Dynamic route that greets the name from the URL |
| GET | `/product/:id/:category` | Dynamic route with two parameters |
| GET | `/search` | Reads `name` and `role` from query parameters |

Every request also prints the HTTP method and URL in the terminal.

## Sample outputs

**GET http://localhost:3000/**
```
Welcome to Home Page
```

**GET http://localhost:3000/about**
```
This is About Page
```

**GET http://localhost:3000/contact**
```
This is Contact Page
```

**GET http://localhost:3000/user/john**
```
Hello john
```

**GET http://localhost:3000/product/101/electronics**
```
Product ID: 101, Category: electronics
```

**GET http://localhost:3000/search?name=john&role=developer**
```
Name: john, Role: developer
```

**Terminal logs**
```
GET /about
GET /user/john
GET /search?name=john
```

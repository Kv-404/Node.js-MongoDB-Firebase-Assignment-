# Assignment 6: Express.js Middleware

This assignment has three separate Express apps. Run one task at a time because each server uses port 3000.

## How to run

1. Open a terminal and navigate to the **Assignment 6** directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the task you want to test:
   ```bash
   npm run task1
   npm run task2
   npm run task3
   ```

## Task 1: Router-Level Middleware (`routerMiddleware.js`)

Creates an Express Router, attaches a custom `routerLogger` middleware, and mounts the router at `/api`.

The logger prints HTTP method, URL, and current date/time for every router request only.

| URL | Browser output |
|-----|----------------|
| http://localhost:3000/api/students | Students List |
| http://localhost:3000/api/courses | Courses List |
| http://localhost:3000/api/faculty | Faculty List |

**Sample terminal output**
```
GET /api/students 2026-07-23 10:30:45
GET /api/courses 2026-07-23 10:31:20
GET /api/faculty 2026-07-23 10:32:10
```

## Task 2: Request Logger Middleware (`requestLogger.js`)

Creates a global `logger` middleware with `app.use()` so it runs before every route.

| URL | Browser output |
|-----|----------------|
| http://localhost:3000/ | Welcome to Home Page |
| http://localhost:3000/about | About Us |
| http://localhost:3000/contact | Contact Information |

**Sample terminal output**
```
GET / 2026-07-23 10:30:45
GET /about 2026-07-23 10:31:20
GET /contact 2026-07-23 10:32:10
```

## Task 3: Response Time Middleware (`responseTimeLogger.js`)

Creates `responseTimeLogger` middleware that records the start time with `Date.now()` and logs the duration after the response finishes.

| URL | Browser output |
|-----|----------------|
| http://localhost:3000/ | Home Page |
| http://localhost:3000/products | Product List |
| http://localhost:3000/users | User List |

**Sample terminal output**
```
GET / - 4 ms
GET /products - 6 ms
GET /users - 3 ms
```

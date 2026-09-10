# Assignment 7: Route Parameters and Query Parameters

This assignment has three separate Express apps. Run one task at a time because each server uses port 3000.

## How to run

1. Open a terminal and navigate to the **Assignment 7** directory.
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

## Task 1: Route Parameters (`routeParameters.js`)

Creates `GET /student/:id` and reads the ID from `req.params`.

| URL | Browser output |
|-----|----------------|
| http://localhost:3000/student/101 | Student ID: 101 |
| http://localhost:3000/student/205 | Student ID: 205 |

## Task 2: Query Parameters (`queryParameters.js`)

Creates `GET /search` and reads `name` and `course` from `req.query`. If no query parameters are sent, it returns `No search data provided.`

| URL | Browser output |
|-----|----------------|
| http://localhost:3000/search?name=Ricky&course=Node.js | Name: Ricky<br>Course: Node.js |
| http://localhost:3000/search | No search data provided. |

## Task 3: Student Profile (`studentProfile.js`)

Creates `GET /student/:id` and uses both route parameters and query parameters.

**URL:** http://localhost:3000/student/101?name=John&course=FullStack

**Browser output:**
```
Student ID: 101
Name: John
Course: FullStack
```

# Node.js, MongoDB & Firebase Assignments

This repository contains a collection of assignments covering various aspects of JavaScript, Node.js, and backend development. Each assignment is structured in its own directory and focuses on specific learning objectives.

## Coursework Portal

Open `index.html` in your browser for the coursework portal. It has a section for every assignment (1–11): in-page testers for Promises and Node demos, links/commands for the HTTP and Express servers, MongoDB user APIs, Firestore storage, and teacher/student registration.

## Assignments Overview

### [Assignment 1](Assignment%201) - Promises (Recruitment System)
Focuses on asynchronous JavaScript using Promises. It simulates a recruitment system with coding and technical interview checks.

### [Assignment 2](Assignment%202) - Node.js HTTP Servers
Covers building basic HTTP servers using Node.js's core `http` module. It includes:
- Basic HTTP server
- HTML response server
- JSON API server
- Route handling server
- Personal portfolio server

### [Assignment 3](Assignment%203) - Node.js Basics
Introduction to Node.js, running simple scripts like displaying messages and personal introductions in the console.

### [Assignment 4](Assignment%204) - File System Operations CLI
An interactive Command Line Interface (CLI) application demonstrating the use of the core Node.js `fs` module to perform file operations (create, read, append, rename, clear, delete) dynamically.

### [Assignment 5](Assignment%205) - Express.js Basic Routes
Express server covering basic routes, dynamic route parameters, query parameters, and request logging.

### [Assignment 6](Assignment%206) - Express.js Middleware
Three Express apps:
- Router-level middleware with `routerLogger`
- Global request logger middleware
- Response time middleware

### [Assignment 7](Assignment%207) - Route Parameters and Query Parameters
Three Express apps for `req.params`, `req.query`, and a student profile that uses both.

### [Assignment 8](Assignment%208) - Create and Retrieve Users
Express + MongoDB + Mongoose app with separate schema, model, and router files. Supports `POST /api/users` and `GET /api/users`.

### [Assignment 9](Assignment%209) - Update and Delete Users
Extends Assignment 8 with `PATCH /api/users/:id` and `DELETE /api/users/:id`, plus error handling for invalid IDs and missing users.

### [Assignment 10](Assignment%2010) - Firebase Firestore
Express app that validates user data and stores it in a Firestore `users` collection. Needs a Firebase service account file.

### [Assignment 11](Assignment%2011) - Teacher and Student Registration
Separate teacher and student schemas, models, and routers. Registers both with `bcrypt` password hashing into local MongoDB.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## How to Run

For detailed instructions on each assignment, please navigate to its respective directory and review the source code or README files. 

For general Node.js scripts, you can run them via the terminal using the `node` command from the root of the repository:
```bash
node "Assignment <Number>/<script_name>.js"
```

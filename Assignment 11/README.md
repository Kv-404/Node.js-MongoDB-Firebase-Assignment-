# Assignment 11: Teacher and Student Registration

Express.js app that registers teachers and students in MongoDB. Passwords are hashed with **bcrypt** before they are stored. Teacher and student logic stay in separate schema, model, and router files.

## Folder structure

```
Assignment 11/
├── server.js
├── schema/
│   ├── teacherSchema.js
│   └── studentSchema.js
├── model/
│   ├── teacherModel.js
│   └── studentModel.js
├── router/
│   ├── teacherRouter.js
│   └── studentRouter.js
├── package.json
└── README.md
```

## How to run

MongoDB must be running locally (same as Assignments 8 and 9). No Atlas website is required.

```bash
cd "Assignment 11"
npm install
npm start
```

On a successful connection the terminal prints:
```
MongoDB connected successfully
Server is running on http://localhost:3000
```

## APIs

### POST /teacher/register

```bash
curl -X POST http://localhost:3000/teacher/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Anita Sharma",
    "email": "anita@college.edu",
    "password": "secret123",
    "subject": "Node.js"
  }'
```

### POST /student/register

```bash
curl -X POST http://localhost:3000/student/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "password": "secret123",
    "course": "MCA",
    "age": 22
  }'
```

Passwords are stored as bcrypt hashes in the `teachers` and `students` collections of `registrationDB`. Open MongoDB Compass at `mongodb://127.0.0.1:27017` to confirm the hash.

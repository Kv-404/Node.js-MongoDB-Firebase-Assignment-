# Assignment 8: Create and Retrieve Users

Express.js application that connects to MongoDB with Mongoose. Users can be added with `POST /api/users` and listed with `GET /api/users`.

Schema, model, and routing logic are kept in separate files as required.

## Folder structure

```
Assignment 8/
├── server.js
├── schema/
│   └── userSchema.js
├── model/
│   └── userModel.js
├── router/
│   └── userRouter.js
├── package.json
└── README.md
```

## How to run the server

1. Make sure MongoDB is running locally:
   ```bash
   brew services start mongodb-community@8.0
   ```
2. Open a terminal and navigate to the **Assignment 8** directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

On a successful database connection the terminal prints:
```
MongoDB connected successfully
Server is running on http://localhost:3000
```

You can override the database URL with `MONGO_URI` if needed:
```bash
MONGO_URI="mongodb://127.0.0.1:27017/userDB" npm start
```

## APIs

### POST /api/users

Creates a new user.

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "course": "MCA"
  }'
```

**Sample response**
```json
{
  "message": "User created successfully",
  "user": {
    "name": "Rahul",
    "email": "rahul@gmail.com",
    "age": 22,
    "course": "MCA",
    "_id": "68abc123...",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

### GET /api/users

Returns every user stored in MongoDB.

```bash
curl http://localhost:3000/api/users
```

## User schema fields

- `name` (String, required)
- `email` (String, required)
- `age` (Number, required)
- `course` (String, required)

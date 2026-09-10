# Assignment 9: Update and Delete Users

This assignment extends Assignment 8. It keeps the same folder structure and adds `PATCH` and `DELETE` APIs for existing users.

Schema, model, and routing logic stay in separate files. They are not defined inside `server.js`.

## Folder structure

```
Assignment 9/
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

1. Make sure MongoDB is running locally.
2. Open a terminal and navigate to the **Assignment 9** directory.
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

## APIs

### POST /api/users

Create a user first so you have an ID for update and delete.

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

### GET /api/users

```bash
curl http://localhost:3000/api/users
```

### PATCH /api/users/:id

Updates an existing user by MongoDB document ID.

```bash
curl -X PATCH http://localhost:3000/api/users/<USER_ID> \
  -H "Content-Type: application/json" \
  -d '{
    "age": 23,
    "course": "MCA"
  }'
```

**Sample response**
```json
{
  "message": "User updated successfully"
}
```

### DELETE /api/users/:id

Deletes the user whose ID is in the URL.

```bash
curl -X DELETE http://localhost:3000/api/users/<USER_ID>
```

**Sample response**
```json
{
  "message": "User deleted successfully"
}
```

## Error handling

| Situation | Status | Message |
|-----------|--------|---------|
| Invalid MongoDB ID | 400 | Invalid MongoDB ID |
| Empty update body | 400 | Invalid request data |
| User not found | 404 | User not found |
| Database error | 500 | Failed to update/delete user |

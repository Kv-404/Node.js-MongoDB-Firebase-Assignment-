# Assignment 10: Store Data in Firebase Firestore

Express.js app that validates user data, then stores it in a Firestore `users` collection.

## Folder structure

```
Assignment 10/
├── server.js
├── config/
│   ├── firebase.js
│   └── serviceAccount.example.json
├── schema/
│   └── userSchema.js
├── router/
│   └── userRouter.js
├── package.json
└── README.md
```

## Firebase setup (one time)

This assignment needs a Firebase project. Local MongoDB is not used here.

1. Open [Firebase Console](https://console.firebase.google.com/).
2. Create a project (or pick an existing one).
3. Build → **Firestore Database** → Create database (start in test mode is fine for classwork).
4. Project settings → **Service accounts** → Generate new private key.
5. Save the downloaded JSON as:
   ```
   Assignment 10/config/serviceAccount.json
   ```
   Do not commit this file. `serviceAccount.example.json` shows the shape only.

## How to run

```bash
cd "Assignment 10"
npm install
npm start
```

On a successful connection the terminal prints:
```
Firebase connected successfully
Server is running on http://localhost:3000
```

## API

### POST /api/users

Valid fields: `name` (required), `email` (required, valid email), `age` (required, 1–120), `course` (required).

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

Invalid data returns `400` with validation errors, for example a missing name or a bad email.

Stored documents appear in Firestore under the `users` collection.

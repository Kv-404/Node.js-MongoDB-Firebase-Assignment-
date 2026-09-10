// Assignment 10: Firebase Firestore connection
// File: config/firebase.js

const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

function getFirestore() {
    if (!admin.apps.length) {
        if (process.env.FIRESTORE_EMULATOR_HOST) {
            admin.initializeApp({
                projectId: process.env.FIREBASE_PROJECT_ID || 'assignment-10'
            });
        } else {
            const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
                || path.join(__dirname, 'serviceAccount.json');

            if (!fs.existsSync(serviceAccountPath)) {
                throw new Error(
                    'Firebase credentials not found. Add config/serviceAccount.json (see serviceAccount.example.json) or set FIRESTORE_EMULATOR_HOST for local testing.'
                );
            }

            admin.initializeApp({
                credential: admin.credential.cert(require(serviceAccountPath))
            });
        }

        console.log('Firebase connected successfully');
    }

    return admin.firestore();
}

module.exports = { getFirestore };

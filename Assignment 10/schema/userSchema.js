// Assignment 10: User schema validation
// File: schema/userSchema.js

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_AGE = 1;
const MAX_AGE = 120;

function validateUser(data) {
    const errors = [];

    if (!data || typeof data !== 'object') {
        return { valid: false, errors: ['Request body is required'] };
    }

    const name = typeof data.name === 'string' ? data.name.trim() : '';
    const email = typeof data.email === 'string' ? data.email.trim() : '';
    const course = typeof data.course === 'string' ? data.course.trim() : '';
    const age = Number(data.age);

    if (!name) {
        errors.push('Name is required');
    }

    if (!email) {
        errors.push('Email is required');
    } else if (!EMAIL_REGEX.test(email)) {
        errors.push('Email must be a valid email address');
    }

    if (data.age === undefined || data.age === null || data.age === '') {
        errors.push('Age is required');
    } else if (!Number.isFinite(age) || !Number.isInteger(age)) {
        errors.push('Age must be a valid whole number');
    } else if (age < MIN_AGE || age > MAX_AGE) {
        errors.push(`Age must be between ${MIN_AGE} and ${MAX_AGE}`);
    }

    if (!course) {
        errors.push('Course is required');
    }

    if (errors.length > 0) {
        return { valid: false, errors };
    }

    return {
        valid: true,
        value: { name, email, age, course }
    };
}

module.exports = { validateUser };

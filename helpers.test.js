const { validateEmail, validatePassword } = require('./helpers');

describe('validateEmail', () => {
    // Test for valid email addresses
    test('should return true for valid emails', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name+tag@gmail.com')).toBe(true);
        expect(validateEmail('user_name@sub.domain.co.uk')).toBe(true);
    });

    // Test for invalid email addresses
    test('should return false for invalid emails', () => {
        expect(validateEmail('invalid-email')).toBe(false);
        expect(validateEmail('user@')).toBe(false);
        expect(validateEmail('@domain.com')).toBe(false);
        expect(validateEmail('user@domain')).toBe(false);
    });

    // Test for edge cases
    test('should handle edge cases correctly', () => {
        expect(validateEmail('')).toBe(false); // Empty string
        expect(validateEmail(null)).toBe(false); // Null value
        expect(validateEmail(undefined)).toBe(false); // Undefined value
        expect(validateEmail(12345)).toBe(false); // Non-string input
        expect(validateEmail({})).toBe(false); // Object input
    });
});

describe('validatePassword', () => {
    // Test for valid passwords
    test('should return true for valid passwords', () => {
        expect(validatePassword('Pass123')).toBe(true);
        expect(validatePassword('StrongP@ss1')).toBe(true);
        expect(validatePassword('1234Abcd')).toBe(true);
    });

    // Test for invalid passwords
    test('should return false for invalid passwords', () => {
        expect(validatePassword('short')).toBe(false); // Too short
        expect(validatePassword('onlylowercase1')).toBe(false); // Missing uppercase
        expect(validatePassword('ONLYUPPERCASE1')).toBe(false); // Missing lowercase
        expect(validatePassword('NoDigitsHere')).toBe(false); // Missing digit
        expect(validatePassword('pass1')).toBe(false); // Too short but has mix
    });

    // Test for edge cases
    test('should handle edge cases correctly', () => {
        expect(validatePassword('')).toBe(false); // Empty string
        expect(validatePassword(null)).toBe(false); // Null value
        expect(validatePassword(undefined)).toBe(false); // Undefined value
        expect(validatePassword(123456)).toBe(false); // Non-string input
        expect(validatePassword({})).toBe(false); // Object input
    });
});

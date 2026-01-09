const { validateEmail } = require('./helpers');

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

// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
}); 

test('invalid phone number', () => {
  expect(isPhoneNumber('1890')).toBe(false);
});

test('invalid phone number 2', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

test('valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('valid email with subdomain', () => {
  expect(isEmail('sub@example.com')).toBe(true);
});


test('invalid email', () => {
  expect(isEmail('test@example')).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail('test@.com')).toBe(false);
}); 

test('valid password', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('valid password with underscores', () => {
  expect(isStrongPassword('Pass_word123')).toBe(true);
});

test('invalid password with special characters', () => {
  expect(isStrongPassword('Pass@word123')).toBe(false);
});
test('invalid password', () => {
  expect(isStrongPassword('pa')).toBe(false);
});

test('valid date', () => {
  expect(isDate('12/31/2004')).toBe(true);
});

test('valid date with single digit month and day', () => {
  expect(isDate('1/1/2004')).toBe(true);
}); 

test('invalid date with wrong format', () => {
  expect(isDate('2004/12/31')).toBe(false);
});

test('invalid date', () => {
  expect(isDate('31')).toBe(false);
});

test('valid hex color', () => {
  expect(isHexColor('a55858')).toBe(true);
});

test('valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('invalid hex color with wrong length', () => {
  expect(isHexColor('12345')).toBe(false);
});

test('invalid hex color', () => {
  expect(isHexColor('FFFF')).toBe(false);
}); 
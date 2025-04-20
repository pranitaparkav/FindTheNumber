// script.test.js
const { generateRandomNumber, validateGuess, evaluateGuess } = require('./script'); // Adjust if needed

test('generateRandomNumber should return a number within the specified range', () => {
  const result = generateRandomNumber(10); // Test with range 1 to 10
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(10);
});

test('validateGuess should return "invalid" for out-of-range guess', () => {
  expect(validateGuess(11, 10)).toBe('invalid'); // Guess is outside range of 1-10
});

test('validateGuess should return "valid" for correct range', () => {
  expect(validateGuess(5, 10)).toBe('valid'); // Guess is inside range of 1-10
});

test('evaluateGuess should return "correct" when guess matches the number', () => {
  // Assume the random number generated is 5
  expect(evaluateGuess(5, 5)).toBe('correct');
});

test('evaluateGuess should return "low" when guess is less than the number', () => {
  expect(evaluateGuess(3, 5)).toBe('low');
});

test('evaluateGuess should return "high" when guess is more than the number', () => {
  expect(evaluateGuess(7, 5)).toBe('high');
});

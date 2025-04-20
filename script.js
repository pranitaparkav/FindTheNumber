// script.js
let randomNumber;
let attempts = 0;
let maxRange;

// Export these functions so Jest can test them
exports.generateRandomNumber = function(max) {
  return Math.floor(Math.random() * max) + 1;
};

exports.validateGuess = function(guess, maxRange) {
  if (guess < 1 || guess > maxRange) {
    return 'invalid';
  }
  return 'valid';
};

exports.evaluateGuess = function(guess, target) {
  if (guess === target) {
    return 'correct';
  } else if (guess < target) {
    return 'low';
  } else {
    return 'high';
  }
};

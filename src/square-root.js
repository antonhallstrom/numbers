/**
 * Compute square roots by Newton`s method
 * whenever we have a guess, y, for the value
 * of the square root of a number, x, we can
 * perform a simple manimulation to get a better
 * guess, by averaging, y, with x / y.
 */

 /**
  * For example, we can compute the square root
  * of 2 as follows:
  *
  *  Guess   |      Quotient         |     Average
  *    1        (2 / 1) = 2            ((2 + 1) / 2) = 1.5
  *   1.5       (2 / 1.5) = 1.3333     ((1.3333 + 1.5) / 2) = 1.4167
  *   repeat
  *
  *  Newton's method of succesive approximations.
  */

// Utility function
function isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]'
}

let previousGuess = 0
let tolerance = 0.001

function improve(guess, number) {
  return number / guess
}

function average(number, guess) {
  return (number + guess) / 2
}

function goodEnough(guess, number) {
  return Math.abs(Math.pow(guess, 2) - number) < tolerance
}

function squareRoot(guess, number) {
  if (isNumber(guess) && isNumber(number)) {
    throw new Error('Arguments to squareRoot must be of type Number.')
  }

  if (goodEnough(guess, number)) {
    return guess
  } else {
    previousGuess = guess
    return squareRoot(average(guess, improve(guess, number)), number)
  }
}

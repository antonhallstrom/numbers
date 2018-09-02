/**
 * Compute square roots by Newton`s method
 * whenever we have a guess, y, for the value
 * of the square root of a number, x, we can
 * perform a simple manipulation to get a better
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
// limited precision
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
  if (!isNumber(guess) && !isNumber(number)) {
    throw new Error('Arguments to squareRoot must be of type Number.')
  }

  if (goodEnough(guess, number)) {
    return guess
  } else {
    previousGuess = guess
    console.log(previousGuess)
    return squareRoot(average(guess, improve(guess, number)), number)
  }
}

// cuberoot, iterator, is recursive, the procedure is defined in terms of itself.

/** A decomposition of cubeRoot
 *         cubeRoot
 *         /     \
 * goodEnough  improve
 *    /   \        |
 *   abs  pow    average
 *
 *
 * e.g we are able to regard pow as a "black-box", we are not at any moment conserned
 * about how pow procedure computes it's result.
 * input -> [black box] -> output
 * A user should not have to know how the procedure is implemented in order to use it.
 */
function improve(guess, number) {
  return ((number / Math.pow(guess, 2)) + 2 * guess) / 3
}

function goodEnough(guess, number) {
  return Math.abs(Math.pow(guess, 3) - number) / guess < tolerance
}

function cubeRoot(guess, number) {
  if (!isNumber(guess) && !isNumber(number)) {
    throw new Error('Arguments to squareRoot must be of type Number.')
  }

  if (goodEnough(guess, number)) {
    return guess
  } else {
    previousGuess = guess
    console.log(previousGuess)
    return cubeRoot(improve(guess, number), number)
  }
}

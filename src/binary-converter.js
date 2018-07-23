/**
 * Converts decimal to binary
 * @param {number} number Decimal
 */
function decimalToBinary(number) {
  if (number === 1) {
    return 1
  }

  return number % 2 + 10 * decimalToBinary(number / 2)
}

function splitNumber(number) {
  let list = (number).toString().split('')

  for (var i in list) {
    list[i] = parseInt(list[i]);
  }

  return list
}

/**
 * Converts binary to decimal
 * @param {number} number Binary
 */
function binaryToDecimal(binary) {
  const bits = splitNumber(binary)
  let nextValue = 0
  let priorValue = 0

  for(let i = 0; i < bits.length; i++) {
    nextValue = priorValue * 2 + bits[i]
    priorValue = nextValue
  }

  return nextValue
}

module.exports = { decimalToBinary, binaryToDecimal}

// Rules of Digit sum.
// 1. Is the sum of all it's integers 153 = + (1 + 5 + 3 = 9)
// 2. Reduce the digit sum until it's in the range of 1-9.
function digitSum(array) {
  const sum = array.reduce((acc, v) => acc + v, 0);
  if (sum <= 9) {
    return sum;
  }

  const strSum = sum.toString();
  const splitSum = strSum.split("", strSum.length);
  const toNumberSum = splitSum.map(n => parseInt(n));
  const nextArray = toNumberSum;

  return digitSum(nextArray);
}

// Rules of Luhn-algorithm or mod-10-algorithm.
// 1. Multiply the first 10 digits alternately with 2 and 1, starting with 2.
// 2. The products shall then be digit sum and added up.
// 3. Then the sum is subtracted by a higher tenhundred number or by itself if evenly
// divided by 10. It can be described as a modulus 10 operation, ((10 - (sum % 10)) % 10

// 10 digits personal number.
function luhnAlgorithm(number) {
  const n = number.toString();
  const arrayDigits = n.split("", n.length);
  const parsedDigits = arrayDigits.map(n => parseInt(n));

  // 1. multi
  const multipledDigits = parsedDigits.map((num, idx) => {
    if (idx % 2 === 0) {
      return num * 2;
    }

    if (idx % 2 === 1) {
      return num * 1;
    }
  });

  // 2. Digit sum
  const sum = multipledDigits.reduce((acc, v) => {
    return acc + digitSum([v]);
  }, 0);

  // if 0 valid personal number, if remainder not valid.
  return (10 - (sum % 10)) % 10 === 0 ? "valid" : "invalid";
}

// luhnAlgorithm(8901233992) -> valid
// luhnAlgorithm(8901233991) -> invalid

module.exports = luhnAlgorithm;

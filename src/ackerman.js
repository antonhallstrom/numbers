function ackerman(x, y) {
  if (y === 0) {
    return 0;
  }

  if (x === 0) {
    return 2 * y;
  }

  if (y === 1) {
    return 2;
  }

  return ackerman(x - 1, ackerman(x, y - 1));
}

module.exports = ackerman;

// ackerman(1, 3)
// ackerman(1 - 1, ackerman(1, 3 - 1))
// ackerman(0, ackerman(1, 2))
// ackerman(0, 2)
// 2 * y ackerman(1, 2)* = 2 * 4 = 8
// ackerman(1, 2)*
// ackerman(1 - 1, ackerman(1, 2 -1))
// ackerman(0, ackerman(1, 1))
// 2 * y ackerman(1, 1)* = 2 * 2 = 4
// ackerman(0 - 1, ackerman(1, 1 - 1))
// ackerman(-1, ackerman(1,  0))
// y === 0 return 0

// ackerman(1, 3) = 8

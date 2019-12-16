function createPascalsTriangle(length, triangle = [[1], [1, 1]]) {
  if (length <= 0) {
    return triangle;
  }
  let size = new Array(length).fill(1);

  const next = [];

  triangle[triangle.length - 1].reduce((acc, v, i, arr) => {
    if (i === 0) {
      return next.push(1);
    }

    next.push(arr[i - 1] + v);

    if (i === arr.length - 1) {
      return next.push(1);
    }

    return acc + v;
  }, size);

  return createPascalsTriangle(length - 1, triangle.concat([next]));
}

module.exports = createPascalsTriangle;

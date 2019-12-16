const createPascalsTriangle = require("./pascal-triangle");

describe("createPascalsTriangle", () => {
  it("createPascalsTriangle", () => {
    // act
    const pascalTriangle = createPascalsTriangle(4);

    // assert
    expect(pascalTriangle).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1]
    ]);
  });
});

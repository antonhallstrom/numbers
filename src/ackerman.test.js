const ackerman = require("./ackerman");

describe("ackerman", () => {
  it("ackerman", () => {
    // act
    const resultA = ackerman(1, 3);
    const resultB = ackerman(3, 3);

    // assert
    expect(resultA).toEqual(8);
    expect(resultB).toEqual(65536);
  });
});

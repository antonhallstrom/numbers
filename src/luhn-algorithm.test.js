const luhnAlgorithm = require("./luhn-algorithm");

describe("luhnAlgorithm", () => {
  it("luhnAlgorithm", () => {
    // act
    const real = luhnAlgorithm(8901233992);
    const fake = luhnAlgorithm(8901233991);

    // assert
    expect(real).toEqual("valid");
    expect(fake).toEqual("invalid");
  });
});

const arraySum = require("./arraySum");

describe("ArraySum", () => {
  it("returns the sum of an array with length of 1", () => {
    const array = [1];
    expect(arraySum(array)).toBe(1);
  });

  it("returns the sum of an array with length of 2", () => {
    const array = [1, 1];
    expect(arraySum(array)).toBe(2);
  });
});

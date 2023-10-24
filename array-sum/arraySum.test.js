const arraySum = require("./arraySum");

describe("arraySum", () => {
  it("returns the sum of an array with length of 1", () => {
    const array = [1];
    expect(arraySum(array)).toBe(1);
  });

  it("returns the sum of an array with length of 2", () => {
    const array = [1, 1];
    expect(arraySum(array)).toBe(2);
  });

  it("returns the sum of an array with length greater than 2", () => {
    const array = [1, 1, 4, 5];
    expect(arraySum(array)).toBe(11);
  });
});

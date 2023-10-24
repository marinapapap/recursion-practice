const countdown = require("./countdown");

describe("countdown", () => {
  it("returns [0] when given 0", () => {
    const startingValue = 0;
    expect(countdown(startingValue)).toEqual([0]);
  });

  it("returns [1, 0] when given 1", () => {
    const startingValue = 1;
    expect(countdown(startingValue)).toEqual([1, 0]);
  });

  it("returns a countdown within an array from a given starting value to 0", () => {
    const startingValue = 10;
    const result = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    expect(countdown(startingValue)).toEqual(result);
  });
});

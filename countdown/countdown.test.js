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
});

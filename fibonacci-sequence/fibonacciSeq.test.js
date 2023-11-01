const fibonacciSeq = require("./fibonacciSeq");

describe("fibonacciSeq", () => {
  it("returns 1 when given 1", () => {
    const n = 1;
    expect(fibonacciSeq(n)).toBe(1);
  });

  it("returns 1 when given 2", () => {
    const n = 2;
    expect(fibonacciSeq(n)).toBe(1);
  });
});

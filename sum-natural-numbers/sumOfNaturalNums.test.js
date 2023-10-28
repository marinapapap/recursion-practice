const sumOfNaturalNums = require("./sumOfNaturalNums");

describe("sumOfNaturalNums", () => {
  it("returns 0 when given 0", () => {
    const n = 0;
    expect(sumOfNaturalNums(n)).toBe(0);
  });

  it("returns 1 when given 1", () => {
    const n = 1;
    expect(sumOfNaturalNums(n)).toBe(1);
  });

  it("returns 3 when given 2", () => {
    const n = 2;
    expect(sumOfNaturalNums(n)).toBe(3);
  });
});

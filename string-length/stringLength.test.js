const stringLength = require("./stringLength");

describe("stringLength", () => {
  it("returns 0 when given an empty string", () => {
    const string = "";
    expect(stringLength(string)).toEqual(0);
  });

  it("returns 1 when given an 'q", () => {
    const string = "1";
    expect(stringLength(string)).toEqual(1);
  });
});

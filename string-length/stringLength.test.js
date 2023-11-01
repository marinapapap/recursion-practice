const stringLength = require("./stringLength");

describe("stringLength", () => {
  it("returns 0 when given an empty string", () => {
    const string = "";
    expect(stringLength(string)).toBe(0);
  });

  it("returns 1 when given '1'", () => {
    const string = "1";
    expect(stringLength(string)).toBe(1);
  });

  it("returns 4 when given '1111'", () => {
    const string = "1111";
    expect(stringLength(string)).toBe(4);
  });

  it("returns 20 when given '01234567890123456789'", () => {
    const string = "01234567890123456789";
    expect(stringLength(string)).toBe(20);
  });

  describe("invalid input", () => {
    it("throws an error if the input is a boolean value", () => {
      expect(() => {
        const invalid = true;
        stringLength(invalid);
      }).toThrow("Input must be a string");
    });

    it("throws an error if the input is an integer", () => {
      expect(() => {
        const invalid = 123;
        stringLength(invalid);
      }).toThrow("Input must be a string");
    });
  });
});

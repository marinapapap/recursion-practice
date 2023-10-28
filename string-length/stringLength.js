const stringLength = (string, index = 0) => {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }
  const array = string.split("");
  if (!array[index]) {
    return 0;
  } else {
    return 1 + stringLength(string, index + 1);
  }
};

module.exports = stringLength;

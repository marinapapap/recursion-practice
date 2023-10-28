const stringLength = (string, index = 0) => {
  const array = string.split("");
  if (!array[index]) {
    return 0;
  } else {
    return 1 + stringLength(string, index + 1);
  }
};

module.exports = stringLength;

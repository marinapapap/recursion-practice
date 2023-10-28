const stringLength = (string, count = 0) => {
  const array = string.split("");
  if (!array[count]) {
    return 0;
  } else {
    return 1 + stringLength(string, count + 1);
  }
};

module.exports = stringLength;

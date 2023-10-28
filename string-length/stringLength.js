const stringLength = (string) => {
  if (!string) {
    return 0;
  } else {
    let count = 0;
    string.split("").forEach(() => {
      count += 1;
    });
    return count;
  }
};

module.exports = stringLength;

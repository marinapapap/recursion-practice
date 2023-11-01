const sumOfNaturalNums = (n) => {
  if (n >= 0 && n <= 1) {
    return n;
  } else {
    return n + sumOfNaturalNums(n - 1);
  }
};

module.exports = sumOfNaturalNums;

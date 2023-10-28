const sumOfNaturalNums = (n) => {
  if (n >= 0 && n <= 1) {
    return n;
  } else {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
};

module.exports = sumOfNaturalNums;

const countdown = (num) => {
  if (num === 0) {
    return [0];
  } else {
    return [num].concat(countdown(num - 1));
  }
};

module.exports = countdown;

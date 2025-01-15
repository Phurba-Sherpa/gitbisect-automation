const add = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Parameter is not a number!");
  }
  return a + b + 1;
};

module.exports = add;

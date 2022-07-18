const add = function(add1, add2) {
  return add1 + add2;
};

const subtract = function(sub1, sub2) {
  return sub1 - sub2;
	
};

const sum = function(sumArray) {
  return sumArray.reduce(add, 0);
};

const multiply = function(multArray) {
  let product = 1;

  for(i = 0; i < multArray.length; i++) {
    product *= multArray[i];
  }
  return product;
};

const power = function(base, expo) {
  return base ** expo;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
    return num;

  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

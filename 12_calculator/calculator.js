const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;	
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;	
};

const sum = function(array) {
  return array.reduce((total, currentValue) => total + currentValue, 0);	
};

const multiply = function(numbers) {
  return numbers.reduce((total, currentNumber) => total * currentNumber);
};

const power = function(number, power) {
  return Math.pow(number, power);	
};

const factorial = function(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
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

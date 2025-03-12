// Function Expression: Calculate the sum of two numbers
const sum = function (a, b) {
  return a + b;
};

// Arrow Function: Calculate the difference between two numbers
const difference = (a, b) => a - b;

// Arrow Function: Calculate the product of two numbers
const multiply = (a, b) => a * b;

// Function Expression: Calculate the quotient of two numbers
const divide = function (a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
};

// Arrow Function: Square an array of numbers
const squareArray = (nums) => nums.map((num) => num * num);

// Example usage of the functions
console.log(sum(5, 3)); // Outputs: 8
console.log(difference(5, 3)); // Outputs: 2
console.log(multiply(5, 3)); // Outputs: 15
console.log(divide(10, 2)); // Outputs: 5
console.log(squareArray([1, 2, 3])); // Outputs: [1, 4, 9]

/* Feature Request -> 1 :
    Factorial and Fibonacci Script:
        - Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
*/

// Recursive function to calculate the factorial of a number
const factorial = (n) => {
  // Input validation
  if (typeof n !== 'number' || n < 0) {
    throw new Error("Factorial is not defined for negative numbers or non-numeric values.");
  }
  
  if (n <= 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  }
  return n * factorial(n - 1); // Recursive case: n * factorial of (n-1)
};

// Recursive function to calculate the nth Fibonacci number
const fibonacci = (n, memo = {}) => {
  // Input validation
  if (typeof n !== 'number' || n < 0) {
    throw new Error("Fibonacci is not defined for negative numbers or non-numeric values.");
  }
  
  if (n === 0) {
    return 0; // Base case: Fibonacci of 0 is 0
  } else if (n === 1) {
    return 1; // Base case: Fibonacci of 1 is 1
  }
  
  if (memo[n]) {
    return memo[n]; // Return cached value if it exists
  }
  
  // Recursive case
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

// Test cases for factorial
console.log(factorial(5));  // Logs: 120
console.log(factorial(0));  // Logs: 1
console.log(factorial(7));  // Logs: 5040
console.log(factorial(3));  // Logs: 6
// console.log(factorial(-1)); // Uncommenting this will throw an error

// Test cases for Fibonacci
console.log(fibonacci(5));   // Logs: 5
console.log(fibonacci(0));   // Logs: 0
console.log(fibonacci(10));  // Logs: 55
console.log(fibonacci(7));   // Logs: 13
// console.log(fibonacci(-1)); // Uncommenting this will throw an error

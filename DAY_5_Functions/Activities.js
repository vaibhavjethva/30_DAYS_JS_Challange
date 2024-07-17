/* Activity -> 1 : Function Declaration */

// Task_1 - Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}

checkEvenOrOdd(4); // 4 is even

// Task_2 - Write a function to calculate the square of a number and return the result.

function calculateSquare(num1) {
  return num1 * num1;
}

let result = calculateSquare(4);
console.log(`The Square is : ${result}`); // 16

/* Activity -> 2 : Function Expression */

// Task_3 - Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

let maxNum = findMax(4, 7);

console.log(`The maximum number is : ${maxNum}`); // 7

// Task_4 - Write a function expression to concatenete two strings and return the result.

const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};

let result1 = concatenateStrings("Good ", "Morning!");

console.log(result1); // "Good Morning!"

/* Activity -> 3 : Arrow Functions */

// Task_5 - Write a arrow function to calculate the sum of two numbers and return the result.

const sum = (a, b) => a + b;

let result2 = sum(10, 5);

console.log(`The Sum is : ${result2}`); // 15

// Task_6 - Write a arrow function to check if a string contains a specific character and return a boolean value.

const containsCharacter = (str, char) => str.includes(char);

let result3 = containsCharacter("Good Morning!", "z");
console.log(result3); // false

/* Activity -> 4 : Function Parameters and Default Values */

// Task_7 - Write a function that takes two parameters and returns their product. Provide a Default value for the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

let result4 = multiply(4); // 4 (since b defaults to 1)
let result5 = multiply(4, 5);

console.log(`The Product Value is : ${result4}`); // 4
console.log(`The Product Value is : ${result5}`); // 20

// Task_8 - Write a function that takes a person's name and age and returns a greeting message. provide a default value for the age.

function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}

let greeting = greet("Vaibhav"); // "Hello, Vaibhav! You are 18 years old."

console.log(greeting);

/* Activity -> 5 : Higher-Order Functions */

// Task_9 - Write a higher-order function that takes a function and a number and calls the function that many times.

function repeatFunction(func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

// Test the higher-order function
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3); // "Hello!" will be printed 3 times

// Task_10 - Write a higher-order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result.

function applyFunctions(func1, func2, value) {
  return func2(func1(value));
}

// Test the higher-order function
const add = (x) => x + 2;
const multiply1 = (x) => x * 3;

let result6 = applyFunctions(add, multiply1, 5); // (5 + 2) * 3 = 21

console.log(result6); // 21

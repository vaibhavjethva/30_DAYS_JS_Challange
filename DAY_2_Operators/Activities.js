/* Activity -> 1 : Arithmetic Operations */

// Task_1 - Write a program to add two numbers and log the result to the console.

let num1 = 10;
let num2 = 20;

// Calculate the sum
let sum = num1 + num2;

// Log the sum to the console
console.log(`The sum of ${num1} and ${num2} is :`, sum); // 30

// Task_2 - Write a program to substract two numbers and log the result to the console.

let num3 = 50;
let num4 = 30;

// Calculate the substraction
let substract = num3 - num4;

// Log the substraction to the console
console.log(`The substraction of ${num3} and ${num4} is :`, substract); // 20

// Task_3 - Write a program to multiply two numbers and log the result to the console.

let num5 = 10;
let num6 = 10;

// Calculate the multiplication
let multiply = num5 * num6;

// Log the multiplication to the console
console.log(`The multiplication of ${num5} and ${num6} is :`, multiply); // 100

// Task_4 - Write a program to divide two numbers and log the result to the console.

let num7 = 20;
let num8 = 10;

// Calculate the division
let divide = num7 / num8;

// Log the division to the console
console.log(`The division of ${num7} and ${num8} is :`, divide); // 2

// Task_5 - Write a program to find the reminder when one number is divided by another and log the result to the console.

let num9 = 10;
let num10 = 3;

// Calculate the division for reminder
let reminder = num9 % num10;

// Log the division to the console
console.log(`The reminder of ${num9} and ${num10} is :`, reminder); // 1

/* Activity -> 2 : Assignment Operators */

// Task_6 - Use the '+=' operator to add a number to a variable and log the result to the console.

let num11 = 10;
let inc = 5;

inc += num11;

console.log("The new value of number is :", inc); // 15

// Task_7 - Use the '-=' operator to substract a number to a variable and log the result to the console.

let num12 = 5;
let dec = 10;

dec -= num12;

console.log("The new value of number is :", dec); // 5

/* Activity -> 3 : Comparison Operators */

// Task_8 - Write a program to compare two numbers using '>' and '<' and log the result to the console.

let num13 = 10;
let num14 = 20;

let isGreater = num13 > num14;
let isSmaller = num13 < num14;

console.log(`The value of ${num13} > ${num14} is :`, isGreater); // false
console.log(`The value of ${num13} < ${num14} is :`, isSmaller); // true

// Task_9 - Write a program to compare two numbers using '>=' and '<=' and log the result to the console.

let num15 = 25;
let num16 = 30; // if this value is 25 then both are true

let isGreaterEqual = num15 >= num16;
let isSmallerEqual = num15 <= num16;

console.log(`The value of ${num15} >= ${num16} is :`, isGreaterEqual); // false
console.log(`The value of ${num15} <= ${num16} is :`, isSmallerEqual); // true

// Task_10 - Write a program to compare two numbers using '==' and '===' and log the result to the console.

let num17 = 30;
let num18 = "30";

let isEqualDouble = num17 == num18;
let isEqualTriple = num17 === num18;

console.log(`The value of ${num17} == ${num18} is :`, isEqualDouble); // true
console.log(`The value of ${num17} === ${num18} is :`, isEqualTriple); // false

/* Activity -> 4 : Logical Operators */

// Task_11 - Write a program that uses the '&&' operator to combine two conditions and log the result to the console.

let condition1 = true;
let condition2 = false;

let result = condition1 && condition2;

console.log(`The result of combining with && is : ${result}`); // false

// Task_12 - Write a program that uses the '||' operator to combine two conditions and log the result to the console.

let condition3 = true;
let condition4 = false;

let result1 = condition3 || condition4;

console.log(`The result of combining with || is : ${result1}`); // true

// Task_13 - Write a program that uses the '!' operator to negate a condition and log the result to the console.

let condition5 = true;

let negatedCondition = !condition5;

console.log(`The result of negating the condition is : ${negatedCondition}`); // false

/* Activity -> 5 : Ternary Operators */

// Task_13 - Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let num19 = -5;

let result2 = num19 >= 0 ? "Positive" : "Negative";

console.log(`The number ${num19} is : ${result2}`); // Negative

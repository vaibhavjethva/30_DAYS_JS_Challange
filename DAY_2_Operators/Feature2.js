/* Feature Request -> 2 :
    Comparison and Logical Operators Script:
        - Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
*/

let num1 = 8;
let num2 = 12;

// Comparison Operators
let isEqual = num1 == num2;
let isStrictEqual = num1 === num2;
let isNotEqual = num1 != num2;
let isStrictNotEqual = num1 !== num2;
let isGreaterThan = num1 > num2;
let isLessThan = num1 < num2;
let isGreaterThanOrEqual = num1 >= num2;
let isLessThanOrEqual = num1 <= num2;

// Logical Operators
let andCondition = num1 < 10 && num2 > 10;
let orCondition = num1 < 10 || num2 > 10;
let notCondition = !(num1 === num2);

// Logging Results
console.log(`The answer ${num1} == ${num2} is : ${isEqual}`); // false
console.log(`The answer ${num1} === ${num2} is : ${isStrictEqual}`); // false
console.log(`The answer ${num1} != ${num2} is : ${isNotEqual}`); // true
console.log(`The answer ${num1} !== ${num2} is : ${isStrictNotEqual}`); // true
console.log(`The answer ${num1} > ${num2} is : ${isGreaterThan}`); // false
console.log(`The answer ${num1} < ${num2} is : ${isLessThan}`); // true
console.log(`The answer ${num1} >= ${num2} is : ${isGreaterThanOrEqual}`); // false
console.log(`The answer ${num1} <= ${num2} is : ${isLessThanOrEqual}`); // true

console.log(`The answer ${num1} < 10 && ${num2} > 10 is : ${andCondition}`); // true
console.log(`The answer ${num1} < 10 || ${num2} > 10 is : ${orCondition}`); // true
console.log(`The answer ! (${num1} === ${num2}) is : ${notCondition}`); // true

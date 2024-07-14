/* Activity -> 1 : Variable Declaration */

// Task_1 - Declare a variable using 'var', assign it a number and log the value to console.

var assignNum = 22;
console.log(assignNum);

// Task_2 - Declare a variable using 'let', assign it a string and log the value to console.

let myName = "Vaibhav";
console.log(myName);

/* Activity -> 2 : Constant Declaration */

// Task_3 - Declare a variable using 'const', assign it a boolean value and log the value to console.

const isLoggedIn = true; // booleanValue = 0{false} or 1{true}
console.log(isLoggedIn);

/* Activity -> 3 : Data Types */

// Task_4 - Create variables of different data types (number, string, boolean, object, array) and log each variable's type using typeOf operator.

let dataNum = 11;
console.log(`The type of ${dataNum} is :`, typeof dataNum); // number

let dataString = "Vaibhav Jethava";
console.log(`The type of ${dataString} is :`, typeof dataString); // string

let dataBoolean = true;
console.log(`The type of ${dataBoolean} is :`, typeof dataBoolean); // boolean

let dataObject = {
  name: "Vaibhav",
  language: "Javascript",
};
console.log(
  `The type of ${JSON.stringify(dataObject)} is :`,
  typeof dataObject
); // object

let dataArray = [1, 2, "3", function () {}]; // In js array can store different datatypes
console.log(`The type of ${dataArray} is :`, typeof dataArray); // object

/* Activity -> 4 : Reassigning Variables */

// Task_5 - Declare a variable using 'let', assign it an initial value, reassign a new value and log both values to console.

let reVal = 32;
console.log("The value of reVal is :", reVal); // 32
reVal = 20;
console.log("The reassigned value of reVal is :", reVal); // 20

/* Activity -> 5 : Understanding 'Const' */

// Task_6 - Try reassigning a variable declared with 'const' and observe the error.

const reVal1 = 99;
console.log("The value of reVal1 is :", reVal1); // 99
reVal1 = 100;
console.log("The reassigned value of reVal1 is :", reVal1); // This will throw a TypeError: Assignment to constant variable.

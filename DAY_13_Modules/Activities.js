/* Activity -> 1 : Creating and Exporting Modules */

// Task_1 - Create a module that exports a function to add two numbers. Import and use this module in another script.

import { add } from './main.js';

const num1 = 5;
const num2 = 7;
const sum = add(num1, num2);

console.log(`The sum of ${num1} and ${num2} is : ${sum}`); // The sum of 5 and 7 is : 12

// Task_2 - Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { person } from './main.js';

console.log(person.greet());
console.log(person.celebrateBirthday());

// Hello, my name is Vaibhav and I am 21 years old.
// Happy Birthday! You are now 22 years old.

/* Activity -> 2 : Named and Default Exports */

// Task_3 - Create a module that exports multiple functions using named exportes. Imports and use these functions in another script.

import { add1, subtract, multiply, divide } from './main.js';

const num3 = 10;
const num4 = 5;

console.log(`The sum of ${num3} and ${num4} is : ${add1(num3, num4)}`);
console.log(`The difference between ${num3} and ${num4} is : ${subtract(num3, num4)}`);
console.log(`The product of ${num3} and ${num4} is : ${multiply(num3, num4)}`);
console.log(`The division of ${num3} by ${num4} is : ${divide(num3, num4)}`);

// The sum of 10 and 5 is : 15
// The difference between 10 and 5 is : 5
// The product of 10 and 5 is : 50
// The division of 10 by 5 is : 2

// Task_4 - Create a module that exports a single function using default export. Import and use this function in another script.

import add2 from './main.js';

const num5 = 5;
const num6 = 10;

console.log(`The sum of ${num5} and ${num6} is : ${add2(num5, num6)}`); // The sum of 5 and 10 is : 15

/* Activity -> 3 : Importing Entire Modules */

// Task_5 - Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as utils from './main.js';

const num7 = 10;
const num8 = 5;

console.log(`PI is : ${utils.PI}`);
console.log(`E is : ${utils.E}`);
console.log(`The sum of ${num7} and ${num8} is : ${utils.add(num7, num8)}`);
console.log(`The difference between ${num7} and ${num8} is : ${utils.subtract(num7, num8)}`);

// PI is : 3.14159
// E is : 2.71828
// The sum of 10 and 5 is : 15
// The difference between 10 and 5 is : 5

/* Activity -> 4 : Using Third-Party Modules */

// Task_6 - Install a third-party module (e.g.,lodash) using npm. Import and use a function from this module in a script.

// Lodash is a versatile library that simplifies many common programming tasks, making it easier to write clean, efficient, and reliable code.

import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffledNumbers = _.shuffle(numbers);

console.log('Original array :', numbers);
console.log('Shuffled array :', shuffledNumbers);

//   Original array : [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]
//   Shuffled array : [
//     6, 7, 10, 8, 3,
//     1, 2,  4, 5, 9
//   ]

// Task_7 - Install a third-party module (e.g.,axios) using npm. Import and use this module to make a network request in a script.

// Axios is a versatile HTTP client that simplifies making network requests, handling responses, and managing errors in both browser and Node.js environments.

import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

// Data: {
//     userId: 1,
//     id: 1,
//     title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//     body: 'quia et suscipit\n' +
//       'suscipit recusandae consequuntur expedita et cum\n' +
//       'reprehenderit molestiae ut ut quas totam\n' +
//       'nostrum rerum est autem sunt rem eveniet architecto'
//   }

/* Activity -> 5 : Module Bundling (Optional) */

// Task_8 - Use a module bundler like webpack or parcel to bundle multiple javascript files into a single file. Write a script to demonstrate the bundling process.

// Ans is in this folder :- webpack-example
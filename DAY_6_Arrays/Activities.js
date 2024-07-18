/* Activity -> 1 : Array Creation and Access */

// Task_1 - Create an array of num10 from 1 to 5 and log the array to the console.

let num = [1, 2, 3, 4, 5];

console.log(num); // [ 1, 2, 3, 4, 5

// Task_2 - Access the first and last elements of the array and log them to the console.

let num1 = [1, 2, 3, 4, 5];

// Accessing the first element (index 0)
let firstElement = num1[0];

// Accessing the last element (index 4, which is the length of the array - 1)
let lastElement = num1[num1.length - 1];

console.log(`First Element is : ${firstElement}`); // First Element is : 1
console.log(`Last Element is : ${lastElement}`); // Last Element is : 5

/* Activity -> 2 : Array Methods (Basic) */

// Task_3 - Use the 'push' method to add a new number to the end of array and log the updated array.

let num2 = [1, 2, 3, 4, 5];

num2.push(6);

console.log(num2); // [ 1, 2, 3, 4, 5, 6 ]

// Task_4 - Use the 'pop' method to remove the last element from the array and log the updated array.
6;
let num3 = [1, 2, 3, 4, 5, 6];

num3.pop();

console.log(num3); // [ 1, 2, 3, 4, 5 ]

// Task_5 - Use the 'shift' method to remove the first element from the array and log the updated array.

let num4 = [1, 2, 3, 4, 5];

num4.shift();

console.log(num4); // [ 2, 3, 4, 5 ]

// Task_6 - Use the 'unshift' method to add a new number to the beginning of the array and log the updated array.

let num5 = [2, 3, 4, 5];

num5.unshift(1);

console.log(num5); // [ 1, 2, 3, 4, 5 ]

/* Activity -> 3 : Array Methods (Intermediate) */

// Task_7 - Use the 'map' method to create a new array where each number is doubled and log the new array.

let num6 = [1, 2, 3, 4, 5];

let doubledNumbers = num6.map((num6) => num6 * 2);

console.log(doubledNumbers); // [ 2, 4, 6, 8, 10 ]

// Task_8 - Use the 'filter' method to create a new array with only even numbers and log the new array.

let num7 = [1, 2, 3, 4, 5];

let evenNumbers = num7.filter((num7) => num7 % 2 === 0);

console.log(evenNumbers); // [ 2, 4 ]

// Task_9 - Use the 'reduce' calculate the sum of all numbers in the array and log the result.

let num8 = [1, 2, 3, 4, 5];

let sum = num8.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15

/* Activity -> 4 : Array Iteration */

// Task_10 - Use a 'for' loop to iterate over the array and log each element to console.

let num9 = [1, 2, 3, 4, 5];

for (let i = 0; i < num9.length; i++) {
  console.log(num9[i]);
} // 1 2 3 4 5

// Task_11 - Use a 'forEach' method to iterate over the array and log each element to console.

let num10 = [1, 2, 3, 4, 5];

num10.forEach((num10) => console.log(num10)); // 1 2 3 4 5

/* Activity -> 5 : Multi-dimensional Arrays */

// Task_12 - Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(matrix); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// Task_13 - Access and log a specific element from the two-dimensional array.

let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing a specific element (e.g., the element at the second row and third column)
let specificElement = matrix[1][2];

console.log(specificElement); // 6

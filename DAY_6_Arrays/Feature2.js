/* Feature Request -> 2 :
    Array Transformation Script:
        - Create a script that uses 'map', 'filter' and 'reduce' methods to transform and aggregate array data.
*/

// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Using the 'map' method to create a new array where each number is doubled
let doubledNumbers = numbers.map((numbers) => numbers * 2);
console.log("Doubled numbers:", doubledNumbers); // [ 2, 4, 6, 8, 10 ]

// Using the 'filter' method to create a new array with only even numbers
let evenNumbers = doubledNumbers.filter((numbers) => numbers % 2 === 0);
console.log("Even numbers:", evenNumbers); // [ 2, 4, 6, 8, 10 ]

// Using the 'reduce' method to calculate the sum of all even numbers
let sumOfEvenNumbers = evenNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum of even numbers:", sumOfEvenNumbers); // 30

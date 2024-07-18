/* Feature Request -> 3 :
    Array Iteration Script:
        - Write a script that iterates over an array using both 'for' loop and 'forEach' method and logs each element.
*/

// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Iterating over the array using a 'for' loop
console.log("Using 'for' loop :");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} // 1 2 3 4 5

// Iterative over the array using 'forEach' method
console.log("Using 'forEach' method :");
numbers.forEach((number) => console.log(number)); // 1 2 3 4 5

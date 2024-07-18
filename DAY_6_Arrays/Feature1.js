/* Feature Request -> 1 :
    Array Manipulation Script:
        - Write a script that demonstrates the creation of an array, adding and removing elements using 'push','pop','shift' and 'unshift' methods.
*/

// Creating an array of numbers
let numbers = [10, 20, 30];

console.log("Initial array :", numbers); // [ 10, 20, 30 ]

// Using the 'push' method to add an element to the end of the array
numbers.push(40);
console.log("After push :", numbers); // [ 10, 20, 30, 40 ]

// Using the 'pop' method to remove the last element from the array
let poppedElement = numbers.pop();
console.log("After pop :", numbers); // [ 10, 20, 30 ]
console.log("Popped element :", poppedElement); // 40

// Using the 'shift' method to remove the first element from the array
let shiftedElement = numbers.shift();
console.log("After shift :", numbers); // [ 20, 30 ]
console.log("Shifted element :", shiftedElement); // 10

// Using the 'unshift' method to add an element to the beginning of the array
numbers.unshift(5);
console.log("After unshift :", numbers); // [ 5, 20, 30 ]

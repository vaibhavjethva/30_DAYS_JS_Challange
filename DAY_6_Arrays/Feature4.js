/* Feature Request -> 4 :
    Two-dimensional Array Script:
        - Create a script that demonstrates the creation and manipulation of a two-dimensional array.
*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Initial matrix:");
console.log(matrix); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

// Accessing and updating a specific element
console.log("Accessing and updating a specific element:");
console.log("Element at row 1, column 2:", matrix[1][2]); // 6
matrix[1][2] = 10;
console.log("Updated matrix:");
console.log(matrix); // [ [ 1, 2, 3 ], [ 4, 5, 10 ], [ 7, 8, 9 ] ]

// Adding a new row to the matrix
console.log("Adding a new row to the matrix:");
let newRow = [11, 12, 13];
matrix.push(newRow);
console.log("Matrix after adding a new row:");
console.log(matrix); // [ [ 1, 2, 3 ], [ 4, 5, 10 ], [ 7, 8, 9 ], [ 11, 12, 13 ] ]

// Removing a row from the matrix
console.log("Removing a row from the matrix:");
matrix.pop();
console.log("Matrix after removing the last row:");
console.log(matrix); // [ [ 1, 2, 3 ], [ 4, 5, 10 ], [ 7, 8, 9 ] ]

// Adding a new column to the matrix
console.log("Adding a new column to the matrix:");
for (let i = 0; i < matrix.length; i++) {
  matrix[i].push(matrix[i][0] * 2);
}
console.log("Matrix after adding a new column:");
console.log(matrix); // [ [ 1, 2, 3, 2 ], [ 4, 5, 10, 8 ], [ 7, 8, 9, 14 ] ]

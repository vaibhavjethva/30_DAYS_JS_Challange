/* Feature Request -> 1 :
    Number Printing Script:
        - Write a script that prints numbers from 1 to 10 using a for loop and while loop.
*/

// Using for loop
let result = "The numbers using for loop :";

for (let num = 1; num <= 10; num++) {
  result += ` ${num}`;
}

console.log(result); // The numbers : 1 2 3 4 5 6 7 8 9 10

// Using While loop

let result1 = "The numbers using while loop :";
let num1 = 1;

while (num1 <= 10) {
  result1 += ` ${num1}`;
  num1++;
}

console.log(result1); // The numbers : 1 2 3 4 5 6 7 8 9 10

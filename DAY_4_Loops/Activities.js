/* Activity -> 1 : For Loop */

// Task_1 - Write a program to print numbers from 1 to 10 using a for loop.

let result = "The numbers :";

for (let num = 1; num <= 10; num++) {
  result += ` ${num}`;
}

console.log(result); // The numbers : 1 2 3 4 5 6 7 8 9 10

// Task_2 - Write a program to print the multiplication table of 5 using a for loop.

let num1 = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
} // 5 x 1 = 5 upto
// 5 x 10 = 50

/* Activity -> 2 : While Loop */

// Task_3 - Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;

while (i <= 10) {
  sum += i;
  i++;
}

console.log(`The sum of numbers from 1 to 10 is : ${sum}`); // 55

// Task_4 - Write a program to print numbers from 10 to 1 using while loop.

let num2 = 10;
let result1 = "";
while (num2 >= 1) {
  result1 += num2 + (num2 > 1 ? " " : "");
  num2--;
}
console.log(`The numbers : ${result1}`); // The numbers : 10 9 8 7 6 5 4 3 2 1

/* Activity -> 3 : Do...While Loop */

// Task_5 - Write a program to print numbers from 1 to 5 using a do...while loop.

let num3 = 1;

do {
  console.log(num3);
  num3++;
} while (num3 <= 5); // 1 2 3 4 5

// Task_6 - Write a program to calculate the factorial of number using a do...while loop.

let num4 = 5;
let factorial = 1;
let n = num4;

do {
  factorial *= n;
  n--;
} while (n > 0);

console.log(`The factorial of ${num4} is : ${factorial}.`);

/* Activity -> 4 : Nested Loops */

// Task_7 - Write a program to print a pattern using nested for loops.

// *
// * *
// * * *
// * * * *
// * * * * *

let rows = 5; // Number of rows

for (let i = 1; i <= rows; i++) {
  let line = ""; // Print spaces
  for (let j = 1; j <= i; j++) {
    line += "* "; // Print stars
  }
  console.log(line);
}

/* Activity -> 5 : Loop Control Statements */

// Task_8 - Write a program to print numbers from 1 to 10, but skip the number 5 using the 'continue' statement.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
} // 1 2 3 4 6 7 8 9 10

// Task_9 - Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the 'break' statement.

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
} // 1 2 3 4 5 6

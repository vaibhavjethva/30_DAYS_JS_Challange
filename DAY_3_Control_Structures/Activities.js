/* Activity -> 1 : If-Else Statements */

// Task_1 - Write a program to check if a number is positive, negative, or zero and log the result to the console.

let num = 5;

if (num > 0) {
  console.log("The number is positive."); // if 5 positive
} else if (num < 0) {
  console.log("The number is negative."); // if -5 negative
} else {
  console.log("The number is zero."); // if 0
}

// Task_2 - Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 21;

if (age >= 18) {
  console.log("The person is eligible to vote."); // if 18 or 18+
} else {
  console.log("The person is not eligible to vote."); // if below 18
}

/* Activity -> 2 : Nested If-Else Statements */

// Task_3 - Write a program to find the largest of three numbers using nested if-else statement.

let num1 = 10;
let num2 = 15;
let num3 = 20;

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(`The largest number is : ${num1}`);
  } else {
    console.log(`The largest number is : ${num3}`);
  }
} else {
  if (num2 >= num3) {
    console.log(`The largest number is : ${num2}`);
  } else {
    console.log(`The largest number is : ${num3}`);
  }
} // The largest number is : 20

/* Activity -> 3 : Switch case */

// Task_4 - Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let num4 = 3;

switch (num4) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day. Please enter a number between 1 and 7.");
} // Tuesday

// Task_5 - Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let score = 95;
let grade;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score >= 0 && score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}

console.log(`The Grade is : ${grade}`); // The Grade is : A

/* Activity -> 4 : Conditional (Ternary) Operator */

// Task_6 - Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num5 = 7;

let result = num % 2 === 0 ? "The number is even." : "The number is odd.";

console.log(result); // The number is odd.

/* Activity -> 5 : Combining Conditions */

// Task_7 -Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
} // 2024 is a leap year

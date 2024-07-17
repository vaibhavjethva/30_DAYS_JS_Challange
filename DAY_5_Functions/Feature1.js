/* Feature Request -> 1 :
    Even or Odd Function Script:
        - Write a script that includes a function to check if a number is even or odd and logs the result.
*/

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}

checkEvenOrOdd(5); // 5 is Odd

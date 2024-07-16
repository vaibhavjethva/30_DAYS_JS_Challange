/* Feature Request -> 5 :
    Factorial Calculation Script:
        - Create a script that calculates the factorial of a number using a do...while loop.
*/

let num = 5;
let factorial = 1;
let i = num;

do {
  factorial *= i;
  i--;
} while (i > 0);

console.log(`The factorial of ${num} is : ${factorial}`); // 120

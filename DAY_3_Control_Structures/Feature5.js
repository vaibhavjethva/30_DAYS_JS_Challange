/* Feature Request -> 5 :
    Arithmetic Operations Script:
        - Write a script that checks if a year is leap year using multiple conditions and logs the result.
*/

let year = 2023;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
} // 2023 is not a leap year

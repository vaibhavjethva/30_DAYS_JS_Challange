/* Feature Request -> 3 :
    Pattern Printing Script:
        - Write a script that prints a pattern of stars using nested loops.
*/

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

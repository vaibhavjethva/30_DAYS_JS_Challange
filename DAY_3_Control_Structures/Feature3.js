/* Feature Request -> 3 :
    Day of the Week Script:
        - Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
*/

let num = 5;

switch (num) {
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
    console.log("Invalid day. Please enter a number between 1 and 7."); // if above 7
} // Thursday

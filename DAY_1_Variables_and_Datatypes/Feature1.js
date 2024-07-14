/* Feature Request -> 1 :
    Variable Types Console Log:
        - Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
*/

let firstVar = 2002;
let secondVar = "A string";
let thirdVar = true;
let fourthVar = [1, 2, 3];
let fifthVar = {
  name: "Vaibhav",
  language: "Javascript",
  state: "Gujarat",
};

console.log(
  `The value is : ${firstVar} and Type of variable is : ${typeof firstVar}`
); // 2002, number
console.log(
  `The value is : ${secondVar} and Type of variable is : ${typeof secondVar}`
); // A string, string
console.log(
  `The value is : ${thirdVar} and Type of variable is : ${typeof thirdVar}`
); // true, boolean
console.log(
  `The value is : ${fourthVar} and Type of variable is : ${typeof fourthVar}`
); // 1,2,3  object
console.log(
  `The value is : ${JSON.stringify(
    fifthVar
  )} and Type of variable is : ${typeof fifthVar}`
); // {"name":"Vaibhav","language":"Javascript","state":"Gujarat"}, object

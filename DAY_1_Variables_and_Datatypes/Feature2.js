/* Feature Request -> 2 :
    Reassignment Demo:
        - Create a script that demonstrates the difference in behavior between 'let' and 'const' when it comes to reassignment.
*/

let firstVar = "Vaibhav";
console.log("The value of firstVar is :", firstVar); // Vaibhav
firstVar = 12345678;
console.log("The reassignment value of firstVar is :", firstVar); // 12345678

const secondVar = "Jethava";
console.log("The value of secondVar is :", secondVar); // Jethava
secondVar = 500;
console.log("The reassignment value of secondVar is :", secondVar); // This will throw a TypeError: Assignment to constant variable.

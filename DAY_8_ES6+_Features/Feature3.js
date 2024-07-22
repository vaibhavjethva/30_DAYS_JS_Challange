/* Feature Request -> 3 :
    Spread and Rest Operators Script:
        - Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
*/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]


// Function using the rest operator to handle multiple parameters
const sumAll = (...num1) => {

    let sum = num1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return sum;
};

console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10)); // 10
console.log(sumAll()); // 0
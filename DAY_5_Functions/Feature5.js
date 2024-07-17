/* Feature Request -> 5 :
    Higher-Order Function Script:
        - Write a script that includes higher-order function to apply a given function multiple times.
*/

function applyFunctions(func1, func2, value) {
  return func2(func1(value));
}

// Test the higher-order function
const add = (x) => x + 2;
const multiply = (x) => x * 3;

let result = applyFunctions(add, multiply, 5); // (5 + 2) * 3 = 21

console.log(result); // 21

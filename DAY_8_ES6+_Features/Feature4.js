/* Feature Request -> 4 :
    Default Parameters Script:
        - Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
*/

const greet = (greeting = 'Hello', name = 'Guest') => {
    return `${greeting}, ${name}!`;
};

console.log(greet());                   // Hello, Guest!
console.log(greet('Hi'));               // Hi, Guest!
console.log(greet('Good morning', 'Vaibhav')); // Good morning, Vaibhav!
console.log(greet(undefined, 'Rutul')); // Hello, Rutul!

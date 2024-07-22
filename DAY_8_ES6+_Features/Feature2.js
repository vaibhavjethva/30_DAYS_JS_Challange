/* Feature Request -> 2 :
    Destructuring Script:
        - Create a script that uses array and object destructuring to extract values and log them.
*/

const numbers = [10, 20, 30, 40, 50];

const [first, second] = numbers;

const person = {
    name: 'Vaibhav',
    age: 21,
    location: 'India'
};

const { name, age, location } = person;

console.log(`First element: ${first}`);  // First element: 10
console.log(`Second element: ${second}`); // Second element: 20

console.log(`Name: ${name}`);        // Name: Vaibhav
console.log(`Age: ${age}`);          // Age: 21
console.log(`Location: ${location}`); // Location: India

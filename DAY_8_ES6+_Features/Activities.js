/* Activity -> 1 : Template Literals */

// Task_1 - Use the template literals to create a string that includes variables for a person's name and age and log the string to the console.

let personName = 'Vaibhav Jethava';
let personAge = 21;

let message = `The person's name is ${personName} and their age is ${personAge}.`;

console.log(message); // The person's name is Vaibhav Jethava and their age is 21.

// Task_2 - Create a multi-line string using template literals and log it to the console.

let multiLineString = `This is a multi-line string.
It allows you to write strings that span multiple lines
without needing to use special characters or concatenation.`;

console.log(multiLineString);

// This is a multi-line string.
// It allows you to write strings that span multiple lines
// without needing to use special characters or concatenation.

/* Activity -> 2 : Destructuring */

// Task_3 - Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let num = [10, 20, 30, 40, 50];

let [firstElement, secondElement] = num;

console.log(`First element: ${firstElement}`); // First element: 10
console.log(`Second element: ${secondElement}`); // Second element: 20

// Task_4 - Use object destructuring to extract the title and author form a book object and log them to the console.

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
};

let {title, author} = book;

console.log(`Title: ${title}`); // Title: To Kill a Mockingbird
console.log(`Author: ${author}`); // Author: Harper Lee

/* Activity -> 3 : Spread and Rest Operators */

// Task_5 - Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console.

let existingArray = [1, 2, 3];

let newArray = [...existingArray, 4, 5, 6];

console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]

// Task_6 - Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.

const sumAll = (...num1) => {

    let sum = num1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return sum;
};

console.log(sumAll(1, 2, 3, 4, 5)); // 15

/* Activity -> 4 : Default Parameters */

// Task_7 - Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const multiply = (a, b = 1) => {
    return a * b;
};

console.log(multiply(5, 5)); // 25
console.log(multiply(7));    // 7 (since the second parameter defaults to 1)

/* Activity -> 5 : Enhanced Object Literals */

// Task_8 - Use enhanced object literals to create an object with methods and properties and log the object to the console.

const person = {
    name: 'Vaibhav',
    age: 21,
    
    // Method to introduce the person
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};
console.log(person); // { name: 'Vaibhav', age: 21, introduce: [Function: introduce] }
console.log(person.introduce()); // Hi, I'm Vaibhav and I'm 21 years old.

// Task_9 - Create an object with computed property names based on variables and log the object to the console.

const key1 = 'name';
const key2 = 'age';

const person1 = {
    [key1]: 'Vaibhav',
    [key2]: 21
};

console.log(person1); // { name: 'Vaibhav', age: 21 }

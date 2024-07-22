/* Feature Request -> 5 :
    Enhanced Object Literals Script:
        - Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
*/

const key1 = 'name';
const key2 = 'age';

const person = {
    [key1]: 'Vaibhav',
    [key2]: 21,
    
    // Method to introduce the person
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};
console.log(person); // { name: 'Vaibhav', age: 21, introduce: [Function: introduce] }
console.log(person.introduce()); // Hi, I'm Vaibhav and I'm 21 years old.

// Task_1

export const add = (a, b) => a + b;

// Task_2

export const person = {
    name: 'Vaibhav',
    age: 21,
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    celebrateBirthday() {
      this.age += 1;
      return `Happy Birthday! You are now ${this.age} years old.`;
    }
  };

// Task_3

export const add1 = (a, b) => a + b;

export const subtract = (a, b) => a - b;

export const multiply = (a, b) => a * b;

export const divide = (a, b) => a / b;

// Task_4

const add2 = (a, b) => a + b;

export default add2;

// Task_5

export const PI = 3.14159;

export const E = 2.71828;

export const add3 = (a, b) => a + b;

export const subtract2 = (a, b) => a - b;
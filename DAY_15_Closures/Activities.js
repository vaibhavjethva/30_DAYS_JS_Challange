/* Activity -> 1 : Understanding Closures */

// Task_1 - Write a function that returns another function, where the inner function accesses a variable from a outer function's scope. Call the inner function and log the result.

const outerFunction = () => {
  let outerVariable = "Hello, World!";

  const innerFunction = () => {
    return outerVariable;
  };

  return innerFunction;
};

const myInnerFunction = outerFunction();
console.log(myInnerFunction()); // "Hello, World!"

// Task_2 - Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

const createCounter = () => {
  let counter = 0;

  const increment = () => {
    counter++;
  };

  const getValue = () => {
    return counter;
  };

  return {
    increment,
    getValue,
  };
};

const myCounter = createCounter();

myCounter.increment();
myCounter.increment();

console.log(myCounter.getValue()); // Logs: 2

/* Activity -> 2 : Practical Closures */

// Task_3 - Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

const createIdGenerator = () => {
  let lastId = 0;

  return () => {
    lastId++;
    return lastId;
  };
};

const generateId = createIdGenerator();

console.log(generateId()); // Logs: 1
console.log(generateId()); // Logs: 2
console.log(generateId()); // Logs: 3

// Task_4 - Create a closure that captures a user's name and returns a function that greets the user by name.

const createGreeter = (name) => {
  return () => {
    return `Hello, ${name}!`;
  };
};

const greetVaibhav = createGreeter("Vaibhav");
const greetRutul = createGreeter("Rutul");

console.log(greetVaibhav()); // Logs: "Hello, Vaibhav!"
console.log(greetRutul()); // Logs: "Hello, Rutul!"

/* Activity -> 3 : Closures in Loops */

// Task_5 - Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const createFunctions = () => {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(
      ((index) => {
        return () => {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
};

const functionsArray = createFunctions();

functionsArray[0](); // Logs: 0
functionsArray[1](); // Logs: 1
functionsArray[2](); // Logs: 2
functionsArray[3](); // Logs: 3
functionsArray[4](); // Logs: 4

/* Activity -> 4 : Module Pattern */

// Task_6 - Use closures to create a simple module for managing a collection of items. Implement methods to add, remove and list items.

const createItemManager = () => {
  let items = [];

  return {
    addItem: (item) => {
      items.push(item);
    },
    removeItem: (item) => {
      items = items.filter((i) => i !== item);
    },
    listItems: () => {
      return items;
    },
  };
};

const itemManager = createItemManager();

itemManager.addItem("Item 1");
itemManager.addItem("Item 2");
itemManager.addItem("Item 3");

console.log(itemManager.listItems()); // Logs: ["Item 1", "Item 2", "Item 3"]

itemManager.removeItem("Item 2");

console.log(itemManager.listItems()); // Logs: ["Item 1", "Item 3"]

/* Activity -> 5 : Memoization */

// Task_7 - Write a function that memoizes the result of another function. Use a closure to store the results of previos computations.

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

// Example usage
const slowFunction = (num) => {
  console.log(`Computing ${num}`);
  return num * num;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Logs: Computing 5
// Logs: 25
console.log(memoizedFunction(5)); // Logs: 25 (No "Computing 5" because the result is cached)
console.log(memoizedFunction(6)); // Logs: Computing 6
// Logs: 36
console.log(memoizedFunction(6)); // Logs: 36 (No "Computing 6" because the result is cached)

// Task_8 - Create a memoized version of a function that calculates the factorial of a number.

const memoize1 = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

const factorial = memoize1((n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
});

// Example usage
console.log(factorial(5)); // Logs: 120
console.log(factorial(6)); // Logs: 720
console.log(factorial(5)); // Logs: 120 (Result retrieved from cache)
console.log(factorial(7)); // Logs: 5040

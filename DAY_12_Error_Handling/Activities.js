/* Activity -> 1 : Basic Error Handling with Try-Catch */

// Task_1 - Write a function that intetionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

const throwErrorFunction = () => {
    throw new Error("Intentional error");
};

const handleErrorFunction = () => {
    try {
        throwErrorFunction();
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
};

// Call the function to see the error handling in action
handleErrorFunction(); // An error occurred:  Intentional error

// Task_2 - Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error. 

const divideNumbers = (numerator, denominator) => {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return numerator / denominator;
};

const handleDivision = (numerator, denominator) => {
    try {
        const result = divideNumbers(numerator, denominator);
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error("An error occurred: ", error.message);
    }
};

// Test the function with different values
handleDivision(10, 2);  // Should print: Result: 5
handleDivision(10, 0);  // Should print: An error occurred: Division by zero is not allowed.

/* Activity -> 2 : Finally Block */

// Task_3 - Write a script that includes a try-catch block and a finally-block. Log messages in the try-catch and finally blocks to observe the execution flow.

const performOperation = () => {
    try {
        console.log("In the try block.");
        
        // Simulating an error
        throw new Error("An intentional error occurred.");

    } catch (error) {
        console.log("In the catch block.");
        console.error("Error message:", error.message);
    } finally {
        console.log("In the finally block.");
    }
};

// Call the function to see the execution flow
performOperation();

// In the try block.
// In the catch block.
// Error message: An intentional error occurred.
// In the finally block.

/* Activity -> 3 : Custom Error Objects */

// Task_4 - Create a custom error class that extends the buit-in Error class.Throw an instance of this custom error in a function and handle it using a try-catch block.

// Define the custom error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

// Function that throws an instance of the custom error
const throwCustomError = () => {
    throw new CustomError("This is a custom error message.");
};

// Handling the custom error
try {
    throwCustomError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Caught a custom error:", error.message);
    } else {
        console.error("Caught an unexpected error:", error);
    }
} finally {
    console.log("Execution reached the finally block.");
}

// Caught a custom error: This is a custom error message.
// Execution reached the finally block.

// Task_5 - Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// Define the custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Function to validate user input
const validateInput = (input) => {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty.");
    }
    return true;
};

// Function to handle validation and catch errors
const handleValidation = (input) => {
    try {
        validateInput(input);
        console.log("Input is valid.");
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation error:", error.message);
        } else {
            console.error("An unexpected error occurred:", error);
        }
    } finally {
        console.log("Validation check completed.");
    }
};

// Test the function with valid and invalid inputs
handleValidation("Valid input");  // Input is valid.
handleValidation("");             // Validation error: Input cannot be empty.

// Input is valid.
// Validation check completed.
// Validation error: Input cannot be empty.
// Validation check completed.

/* Activity -> 4 : Error Handling in Promises */

// Task_6 - Create a promise that randomly resolves or rejects. Use '.catch()' to handle the rejection and log an appropriate message to the console.

// Function that returns a Promise that randomly resolves or rejects
const randomPromise = () => {
    return new Promise((resolve, reject) => {
        // Simulate a random outcome
        const outcome = Math.random() > 0.4; // 40% chance to resolve or reject

        setTimeout(() => {
            if (outcome) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, 1000); // Simulate some asynchronous operation
    });
};

// Call the function and handle rejection using .catch()
randomPromise()
    .then(result => {
        console.log(result); // Log success message
    })
    .catch(error => {
        console.error("Error:", error); // Log error message
    });

// Promise resolved successfully!

// Task_7 - Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects and logs the error message.

// Function that returns a Promise that randomly resolves or rejects
const randomPromise1 = () => {
    return new Promise((resolve, reject) => {
        const outcome = Math.random() > 0.4; // 50% chance to resolve or reject

        setTimeout(() => {
            if (outcome) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, 1000); // Simulate some asynchronous operation
    });
};

// Async function to handle the promise
const handlePromise = async () => {
    try {
        const result = await randomPromise1();
        console.log(result); // Log success message
    } catch (error) {
        console.error("Error:", error); // Log error message
    }
};

// Call the async function
handlePromise();

// Promise resolved successfully!

/* Activity -> 5 : Graceful Error Handling in Fetch */

// Task_8 - Use the 'fetch' API to request data from an invalid URL and handle the error using '.catch()'.Log an appropriate error message to the console.

// Function to fetch data from an invalid URL
const fetchData = () => {
    // Attempt to fetch data from an invalid URL
    fetch('https://invalid-url.example.com')
        .then(response => {
            if (!response.ok) {
                // If the response status is not ok, reject the Promise
                return Promise.reject('Failed to fetch data: ' + response.statusText);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.error('Error:', error); // Log the error message
        });
};

// Call the function to see the error handling in action
fetchData();

// Error: TypeError: fetch failed
//     at node:internal/deps/undici/undici:12502:13
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
//   [cause]: Error: getaddrinfo ENOTFOUND invalid-url.example.com
//       at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26) {
//     errno: -3008,
//     code: 'ENOTFOUND',
//     syscall: 'getaddrinfo',
//     hostname: 'invalid-url.example.com'
//   }
// }

// Task_9 - Use the 'fetch' API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

// Async function to fetch data from an invalid URL
const fetchData1 = async () => {
    try {
        const response = await fetch('https://invalid-url.example.com');

        // Check if the response status is OK
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        // Parse the response as JSON
        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        // Handle any errors that occurred during fetch or processing
        console.error('Error:', error.message);
    }
};

// Call the async function
fetchData1();

// Error: fetch failed

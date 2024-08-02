/* Feature Request -> 5 :
    Valid Parentheses Script:
        - Write a script that includes a function to check if a string of  parentheses is valid and logs the result.
*/

const isValid = (s) => {
    const stack = [];
    const matchingParentheses = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// Test cases
const testCases = [
    "()",       // Expected output: true
    "()[]{}",   // Expected output: true
    "(]",       // Expected output: false
    "([)]",     // Expected output: false
    "{[]}",     // Expected output: true
    "",         // Expected output: true
];

testCases.forEach((testCase, index) => {
    const result = isValid(testCase);
    console.log(`Test Case ${index + 1}:`, result);
});

// Test Case 1: true
// Test Case 2: true
// Test Case 3: false
// Test Case 4: false
// Test Case 5: true
// Test Case 6: true
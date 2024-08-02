/* Feature Request -> 3 :
    Palindrome Number Script:
        - Write a script that includes a function to check if an integer is a palindrome and logs the result.
*/

const isPalindrome = (x) => {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    }

    // Convert the number to a string
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    
    // Check if the string is the same forwards and backwards
    return str === reversedStr;
};

// Test cases
const testCases = [
    121,    // Expected output: true
    -121,   // Expected output: false
    10,     // Expected output: false
    0,      // Expected output: true
    1221,   // Expected output: true
];

testCases.forEach((testCase, index) => {
    const result = isPalindrome(testCase);
    console.log(`Test Case ${index + 1}:`, result);
});

// Test Case 1: true
// Test Case 2: false
// Test Case 3: false
// Test Case 4: true
// Test Case 5: true
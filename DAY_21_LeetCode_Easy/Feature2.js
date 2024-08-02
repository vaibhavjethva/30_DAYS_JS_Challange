/* Feature Request -> 2 :
    Reverse Integer Script:
        - Create a script that includes a function to reverse an integer and handles edge cases.
*/

const reverseInteger = (x) => {
    const isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);

    // Handle overflow
    if (reversed > 2**31 - 1) {
        return 0;
    }

    return isNegative ? -reversed : reversed;
};

// Test cases
const testCases = [
    123,     // Expected output: 321
    -123,    // Expected output: -321
    120,     // Expected output: 21
    0,       // Expected output: 0
    1534236469, // Expected output: 0 (because the reversed integer overflows)
];

testCases.forEach((testCase, index) => {
    const result = reverseInteger(testCase);
    console.log(`Test Case ${index + 1}:`, result);
});

// Test Case 1: 321
// Test Case 2: -321
// Test Case 3: 21
// Test Case 4: 0
// Test Case 5: 0 (because the reversed integer overflows)
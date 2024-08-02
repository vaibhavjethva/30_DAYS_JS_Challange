/* Feature Request -> 1 :
    Two Sum Script:
        - Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.
*/

const twoSum = (nums, target) => {
    const numToIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }

    // If no solution found, return an empty array (as per LeetCode, there is always one solution)
    return [];
};

// Test cases
const testCases = [
    { nums: [2, 7, 11, 15], target: 9 },
    { nums: [3, 2, 4], target: 6 },
    { nums: [3, 3], target: 6 },
    { nums: [1, 5, 3, 7], target: 8 },
];

testCases.forEach((testCase, index) => {
    const { nums, target } = testCase;
    const result = twoSum(nums, target);
    console.log(`Test Case ${index + 1}:`, result);
});

// Test Case 1: [ 0, 1 ]
// Test Case 2: [ 1, 2 ]
// Test Case 3: [ 0, 1 ]
// Test Case 4: [ 1, 2 ]
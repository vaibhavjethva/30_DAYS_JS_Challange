/* Feature Request -> 4 :
    3Sum Script:
        - Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.
*/

/**
 * Finds all unique triplets in the array which give the sum of zero.
 * @param {number[]} nums - Array of integers.
 * @return {number[][]} - Array of unique triplets.
 */

const threeSum = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the array to use two-pointer technique

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
        while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Output: []
console.log(threeSum([0])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]
console.log(threeSum([-2, 0, 1, 1, 2])); // Output: [[-2, 0, 2], [-2, 1, 1]]

/* Feature Request -> 3 :
    Container With Most Water Script:
        - Write a script that includes a function to find the container with the most water and logs the maximum amount of water.
*/

/**
 * Finds the maximum amount of water a container can hold.
 * @param {number[]} height - Array of non-negative integers representing heights.
 * @return {number} - The maximum amount of water.
 */
const maxArea = (height) => {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let currentWater = width * minHeight;
    maxWater = Math.max(maxWater, currentWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
console.log(maxArea([1, 2, 1])); // Output: 2
console.log(maxArea([0, 2])); // Output: 0
console.log(maxArea([1, 2, 4, 3])); // Output: 4

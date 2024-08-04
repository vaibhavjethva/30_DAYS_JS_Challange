/* Feature Request -> 3 :
    Trapping Rain Water Script:
        - Write a script that includes a function to calculate the amount of trapped rainwater and logs the result.
*/

const trap = (height) => {
  if (height.length === 0) return 0;

  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let totalWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }
      right--;
    }
  }

  return totalWater;
};

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([1, 1, 1, 1])); // Output: 0
console.log(trap([4, 2, 3])); // Output: 1
console.log(trap([0, 0, 0, 0])); // Output: 0

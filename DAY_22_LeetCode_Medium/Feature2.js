/* Feature Request -> 2 :
    Longest Substring Script:
        - Create a script that includes a function to find the longest substring without repeating characters and logs the length.
*/

/**
 * Finds the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @return {number} - The length of the longest substring.
 */

const lengthOfLongestSubstring = (s) => {
  let n = s.length;
  let set = new Set();
  let ans = 0,
    i = 0,
    j = 0;

  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s[i++]);
    }
  }

  return ans;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (abc)
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 (b)
console.log(lengthOfLongestSubstring("wwkew")); // Output: 3 (wke)
console.log(lengthOfLongestSubstring("")); // Output: 0
console.log(lengthOfLongestSubstring("au")); // Output: 2 (au)
console.log(lengthOfLongestSubstring("dvdf")); // Output: 3 (vdf)
console.log(lengthOfLongestSubstring("aab")); // Output: 2 (ab)

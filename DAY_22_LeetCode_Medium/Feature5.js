/* Feature Request -> 5 :
    Group Anagrams Script:
        - Write a script that includes a function to group anagrams and logs the grouped anagrams.
*/

/**
 * Groups anagrams together from an array of strings.
 * @param {string[]} strs - Array of strings.
 * @return {string[][]} - Array of grouped anagrams.
 */

const groupAnagrams = (strs) => {
  const map = new Map();

  strs.forEach((str) => {
    // Sort the characters in the string
    const sortedStr = str.split("").sort().join("");

    // If the sorted string is not in the map, add it with an empty array
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // Push the original string into the map
    map.get(sortedStr).push(str);
  });

  // Convert the map values to an array
  return Array.from(map.values());
};

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]

console.log(
  groupAnagrams([
    "cab",
    "tin",
    "pew",
    "duh",
    "may",
    "ill",
    "buy",
    "bar",
    "max",
    "doc",
  ])
);
// Output: [["cab"],["tin"],["pew"],["duh"],["may"],["ill"],["buy"],["bar"],["max"],["doc"]]

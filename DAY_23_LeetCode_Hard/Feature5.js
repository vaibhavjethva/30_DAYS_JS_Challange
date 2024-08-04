/* Feature Request -> 5 :
    Word Ladder Script:
        - Write a script that includes a function to find the shortest transformation sequence in a word ladder and logs the sequence length.
*/

const ladderLength = (beginWord, endWord, wordList) => {
  if (!wordList.includes(endWord)) return 0;

  const wordSet = new Set(wordList);
  const queue = [[beginWord, 1]]; // The queue stores tuples of (currentWord, level)
  const visited = new Set();
  visited.add(beginWord); // Add the beginWord to visited set

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    if (currentWord === endWord) return level;

    for (let i = 0; i < currentWord.length; i++) {
      const originalChar = currentWord[i];
      for (
        let charCode = "a".charCodeAt(0);
        charCode <= "z".charCodeAt(0);
        charCode++
      ) {
        const newChar = String.fromCharCode(charCode);
        if (newChar === originalChar) continue;

        const newWord =
          currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0; // If no transformation sequence is found
};

// Test cases
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog"])); // Output: 0
console.log(ladderLength("a", "c", ["a", "b", "c"])); // Output: 2
console.log(ladderLength("lost", "cost", ["cost", "lost", "most", "post"])); // Output: 2

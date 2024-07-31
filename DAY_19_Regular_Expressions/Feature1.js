/* Feature Request -> 1 :
    Basic Regex Script:
        - Write a script that uses regular expressions to match simple patterns and log the matches.
*/

// Sample string
const sampleString = "I love JavaScript. JavaScript is a versatile language.";

// Regular expression to match all occurrences of "JavaScript"
const regex = /JavaScript/g;

// Find all matches
const matches = sampleString.match(regex);

// Log the matches
console.log(matches); // [ 'JavaScript', 'JavaScript' ]
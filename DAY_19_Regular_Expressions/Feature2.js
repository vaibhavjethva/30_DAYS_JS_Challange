/* Feature Request -> 2 :
    Character Classes and Quantifiers Script:
        - Create a script that uses regular expressions to match words with specific characteristic and log the matches.
*/

// Sample string
const sampleString = "JavaScript is a popular language. It is used for Web Development.";

// Regular expression to match all words starting with a capital letter
const regex = /\b[A-Z][a-zA-Z]*\b/g;

// Find all matches
const matches = sampleString.match(regex);

// Log the matches
console.log(matches); // [ 'JavaScript', 'It', 'Web', 'Development' ]

// Sample string
const sampleString1 = "The year is 2024 and the time is 12:15 PM.";

// Regular expression to match all sequences of one or more digits
const regex1 = /\d+/g;

// Find all matches
const matches1 = sampleString1.match(regex1);

// Log the matches
console.log(matches1); // [ '2024', '12', '15' ]
/* Feature Request -> 4 :
    Assertions and Boundaries Script:
        - Create a script that uses regular expressions to matche the words at specific positions in a string and log the matches.
*/

// Sample string
const sampleString = "JavaScript is a popular language. It is widely used in development.";

// Regular expression to match a word at the beginning of a string
const regex = /^\w+/;

// Use the match method to find matches
const matches = sampleString.match(regex);

// Log the matches
if (matches) {
    console.log(`Matched word at the beginning of the string : ${matches[0]}`);
} else {
    console.log("No matches found.");
}
// Matched word at the beginning of the string : JavaScript

// Regular expression to match a word at the end of a string
const regex1 = /\b\w+\b[.,!?]?$/;

// Use the match method to find matches
const matches1 = sampleString.match(regex1);

// Log the matches
if (matches1) {
    console.log(`Matched word at the end of the string : ${matches1[0]}`);
} else {
    console.log("No matches found.");
}
// Matched word at the end of the string : development.
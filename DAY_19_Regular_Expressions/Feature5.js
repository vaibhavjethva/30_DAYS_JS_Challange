/* Feature Request -> 5 :
    Validation Script:
        - Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.
*/

// regular expressions to validate passwords
// Sample passwords
const password1 = "Password123!";
const password2 = "password123";
const password3 = "PASSWORD123!";
const password4 = "Password!";

// Regular expression to validate the password
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Function to validate the password
function validatePassword(password) {
    if (regex.test(password)) {
        console.log(`Password "${password}" is valid.`);
    } else {
        console.log(`Password "${password}" is invalid.`);
    }
}

// Test the sample passwords
validatePassword(password1); // Should be valid
validatePassword(password2); // Should be invalid
validatePassword(password3); // Should be invalid
validatePassword(password4); // Should be invalid

// Password "Password123!" is valid.
// Password "password123" is invalid.
// Password "PASSWORD123!" is invalid.
// Password "Password!" is invalid.

// regular expressions to validate URLs
// Sample URLs
const url1 = "https://www.example.com";
const url2 = "http://example.com";
const url3 = "www.example.com";
const url4 = "example.com";
const url5 = "https://example";

// Regular expression to validate the URL
const regex1 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

// Function to validate the URL
function validateURL(url) {
    if (regex1.test(url)) {
        console.log(`URL "${url}" is valid.`);
    } else {
        console.log(`URL "${url}" is invalid.`);
    }
}

// Test the sample URLs
validateURL(url1); // Should be valid
validateURL(url2); // Should be valid
validateURL(url3); // Should be valid
validateURL(url4); // Should be valid
validateURL(url5); // Should be invalid

// URL "https://www.example.com" is valid.
// URL "http://example.com" is valid.
// URL "www.example.com" is valid.
// URL "example.com" is valid.
// URL "https://example" is invalid.
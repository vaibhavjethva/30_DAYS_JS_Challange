/* Feature Request -> 3 :
    Grouping and Capturing Script:
        - Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses and log the captures.
*/

// Sample phone number
const phoneNumber = "(123) 456-7890";

// Regular expression to capture the area code, central office code, and line number
const regex = /\((\d{3})\) (\d{3})-(\d{4})/;

// Use the exec method to find matches and capture groups
const matches = regex.exec(phoneNumber);

// Log the captures
if (matches) {
    const areaCode = matches[1];
    const centralOfficeCode = matches[2];
    const lineNumber = matches[3];
    console.log(`Area Code : ${areaCode}`);
    console.log(`Central Office Code : ${centralOfficeCode}`);
    console.log(`Line Number : ${lineNumber}`);
} else {
    console.log("No matches found.");
}

// Area Code : 123
// Central Office Code : 456
// Line Number : 7890

// Sample email address
const email = "user@example.com";

// Regular expression to capture the username and domain
const regex1 = /^([^@]+)@([^@]+)$/;

// Use the exec method to find matches and capture groups
const matches1 = regex1.exec(email);

// Log the captures
if (matches1) {
    const username = matches1[1];
    const domain = matches1[2];
    console.log(`Username : ${username}`);
    console.log(`Domain : ${domain}`);
} else {
    console.log("No matches found.");
}

// Username : user
// Domain : example.com
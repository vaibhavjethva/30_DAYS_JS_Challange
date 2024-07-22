/* Feature Request -> 1 :
    Template Literals Script:
        - Write a script that demonstrates the use of template literals to create and log string with embedded variables and multi-line strings.
*/

const firstName = 'Vaibhav';
const lastName = 'Jethava';
const age = 21;
const job = 'Software developer';

const introduction = `
    Hello, my name is ${firstName} ${lastName}.
    I am ${age} years old and work as a ${job}.
    I enjoy coding and learning new technologies.
`;

console.log(introduction);

// Hello, my name is Vaibhav Jethava.
// I am 21 years old and work as a Software developer.
// I enjoy coding and learning new technologies.
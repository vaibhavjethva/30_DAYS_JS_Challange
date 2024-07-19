/* Feature Request -> 3 :
    Object Iteration Script:
        - Write a script that demonstrates iterating over an object's properties using 'for...in' loop and 'Object.keys'/'Object.values'.
*/

// Define a book object
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genre: "Fiction",
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
};

// Using 'for...in' loop to iterate over properties
console.log("Using 'for...in' loop:");
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    // Check if the property is a direct property of the object
    if (typeof book[key] === "function") {
      console.log(`${key}: [Function]`);
    } else {
      console.log(`${key}: ${book[key]}`);
    }
  }
}

// Using 'Object.keys' to iterate over property names
console.log("\nUsing 'Object.keys':");
Object.keys(book).forEach((key) => {
  if (typeof book[key] === "function") {
    console.log(`${key}: [Function]`);
  } else {
    console.log(`${key}: ${book[key]}`);
  }
});

// Using 'Object.values' to iterate over property values
console.log("\nUsing 'Object.values':");
Object.values(book).forEach((value) => {
  if (typeof value === "function") {
    console.log("[Function]");
  } else {
    console.log(value);
  }
});

// Using 'for...in' loop:
// title: To Kill a Mockingbird
// author: Harper Lee
// year: 1960
// genre: Fiction
// getDetails: [Function]
// updateYear: [Function]

// Using 'Object.keys':
// title: To Kill a Mockingbird
// author: Harper Lee
// year: 1960
// genre: Fiction
// getDetails: [Function]
// updateYear: [Function]

// Using 'Object.values':
// To Kill a Mockingbird
// Harper Lee
// 1960
// Fiction
// [Function]
// [Function]

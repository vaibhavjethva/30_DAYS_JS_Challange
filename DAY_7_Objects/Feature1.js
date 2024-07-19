/* Feature Request -> 1 :
    Book Object Script:
        - Write a script that creates a book object, adds methods to it and logs its properties and method results.
*/

const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,

  // Method to get book details
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },

  // Method to update the year
  updateYear: function (newYear) {
    this.year = newYear;
  },

  // Method to get title and year
  getTitleAndYear: function () {
    return `${this.title} was published in ${this.year}`;
  },
};

// Log the book properties
console.log("Book Properties:");
for (let key in book) {
  if (book.hasOwnProperty(key)) {
    // Check if the property is a function
    if (typeof book[key] === "function") {
      console.log(`${key}: [Function]`);
    } else {
      console.log(`${key}: ${book[key]}`);
    }
  }
}

// Log the results of calling the methods
console.log("\nMethod Results:");
console.log("getDetails:", book.getDetails());
console.log("getTitleAndYear:", book.getTitleAndYear());

// Update the year and log the updated details
book.updateYear(2021);
console.log("\nUpdated Book:");
console.log("getTitleAndYear after update:", book.getTitleAndYear());

// Book Properties:
// title: To Kill a Mockingbird
// author: Harper Lee
// year: 1960
// getDetails: [Function]
// updateYear: [Function]
// getTitleAndYear: [Function]

// Method Results:
// getDetails: To Kill a Mockingbird by Harper Lee
// getTitleAndYear: To Kill a Mockingbird was published in 1960

// Updated Book:
// getTitleAndYear after update: To Kill a Mockingbird was published in 2021

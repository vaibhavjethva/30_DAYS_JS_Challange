/* Feature Request -> 2 :
    Library Object Script:
        - Create a script that defines a library object containing an array of book objects and logs the library's details.
*/

const book1 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
  getTitleAndYear: function () {
    return `${this.title} was published in ${this.year}`;
  },
};

const book2 = {
  title: "1984",
  author: "George Orwell",
  year: 1949,
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
  updateYear: function (newYear) {
    this.year = newYear;
  },
  getTitleAndYear: function () {
    return `${this.title} was published in ${this.year}`;
  },
};

// Define library object with an array of books
const library = {
  name: "City Library",
  location: "123 Library St.",
  books: [book1, book2],

  // Method to get library details
  getLibraryDetails: function () {
    return `${this.name}, located at ${this.location}`;
  },

  // Method to log all book details
  logBookDetails: function () {
    console.log(`Books in ${this.name}:`);
    this.books.forEach((book) => {
      console.log(book.getTitleAndYear());
    });
  },
};

// Log the library's details
console.log("Library Details:");
console.log(library.getLibraryDetails());

console.log("\nBook Details:");
library.logBookDetails();

// Library Details:
// City Library, located at 123 Library St.

// Book Details:
// Books in City Library:
// To Kill a Mockingbird was published in 1960
// 1984 was published in 1949

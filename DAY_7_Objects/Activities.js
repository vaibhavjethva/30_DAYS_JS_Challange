/* Activity -> 1 : Object Creation and Access */

// Task_1 - Create an object representing a book with properties like title, author and year and log the object to the console.

let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

console.log(book); // { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// Task_2 - Access and log the title and author properties of the book object.

let book1 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

console.log(`Title : ${book1.title}`); // Title : To Kill a Mockingbird
console.log(`Author : ${book1.author}`); // Author : Harper Lee

/* Activity -> 2 : Object Methods */

// Task_3 - Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

const book2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getDetails: function () {
    return `${this.title} by ${this.author}`;
  },
};

console.log(book2.getDetails()); // To Kill a Mockingbird by Harper Lee

// Task_4 - Add a method to the book object that takes a parameter (year)and update's the book's year property then log the updated object.

const book3 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getDetails: () => `${book3.title} by ${book3.author}`,
  updateYear: (newYear) => {
    book3.year = newYear;
  },
};

book3.updateYear(2020);

console.log(book3);

// {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 2020,
//     getDetails: [Function: getDetails],
//     updateYear: [Function: updateYear]
//   }

/* Activity -> 3 : Nested Objects */

// Task_5 - Create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console.

const book4 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getDetails: () => `${book4.title} by ${book4.author}`,
  updateYear: (newYear) => {
    book4.year = newYear;
  },
};

const book5 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
  getDetails: () => `${book5.title} by ${book5.author}`,
  updateYear: (newYear) => {
    book5.year = newYear;
  },
};

const library = {
  name: "City Library",
  books: [book4, book5],
};

console.log(library);

// {
//   name: 'City Library',
//   books: [
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960,
//       getDetails: [Function: getDetails],
//       updateYear: [Function: updateYear]
//     },
//     {
//       title: 'Pride and Prejudice',
//       author: 'Jane Austen',
//       year: 1813,
//       getDetails: [Function: getDetails],
//       updateYear: [Function: updateYear]
//     }
//   ]
// }

// Task_6 - Access and log the name of the library and the titles of all books in the library.

console.log("Library Name:", library.name);

library.books.forEach((book) => {
  console.log("Book Title:", book.title);
});
// Library Name: City Library
// Book Title: To Kill a Mockingbird
// Book Title: Pride and Prejudice

/* Activity -> 4 : The 'this' Keyword */

// Task_7 - Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year and log the result of calling this method.

const book6 = {
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

const book7 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  year: 1813,
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

const library2 = {
  name: "City Library",
  books: [book6, book7],
};

console.log(book6.getTitleAndYear()); // To Kill a Mockingbird was published in 1960
console.log(book7.getTitleAndYear()); // Pride and Prejudice was published in 1813

/* Activity -> 5 : Object Iteration */

// Task_8 - Use a 'for...in' loop to iterate over the properties of book object and log the each property and its value.

const book8 = {
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

// Use a 'for...in' loop to iterate over the properties of the book object
// Use a 'for...in' loop to iterate over the properties of the book object
for (let key in book8) {
  if (book8.hasOwnProperty(key)) {
    // Check if the property is a direct property of the object
    if (typeof book8[key] === "function") {
      console.log(`${key}: [Function]`);
    } else {
      console.log(`${key}: ${book8[key]}`);
    }
  }
}

// title: To Kill a Mockingbird
// author: Harper Lee
// year: 1960
// getDetails: [Function]
// updateYear: [Function]
// getTitleAndYear: [Function]

// Task_9 - Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.

const book9 = {
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

// Use Object.keys to get an array of property names (keys)
const keys = Object.keys(book9);
console.log("Keys:");
keys.forEach((key) => console.log(key));

// Use Object.values to get an array of property values
const values = Object.values(book9);
console.log("Values:");
values.forEach((value) => {
  if (typeof value === "function") {
    console.log("[Function]");
  } else {
    console.log(value);
  }
});

// Keys:
// title
// author
// year
// getDetails
// updateYear
// getTitleAndYear
// Values:
// To Kill a Mockingbird
// Harper Lee
// 1960
// [Function]
// [Function]
// [Function]

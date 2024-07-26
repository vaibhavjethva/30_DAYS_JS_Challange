/* Feature Request -> 4 :
    Getters ans Setters Script:
        - Create a script that uses getters and setters in a class.
*/

class Person {
    #firstName;
    #lastName;
    #age;
  
    constructor(firstName, lastName, age) {
      this.#firstName = firstName;
      this.#lastName = lastName;
      this.#age = age;
    }
  
    // Getter for fullName
    get fullName() {
      return `${this.#firstName} ${this.#lastName}`;
    }
  
    // Setter for fullName
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.#firstName = firstName;
      this.#lastName = lastName;
    }
  
    // Getter for age
    get age() {
      return this.#age;
    }
  
    // Setter for age
    set age(newAge) {
      if (newAge >= 0) {
        this.#age = newAge;
      } else {
        console.log('Age must be a non-negative number.');
      }
    }
  
    // Method to display person information
    displayInfo() {
      console.log(`Name: ${this.fullName}, Age: ${this.age}`);
    }
  }
  
  // Create an instance of the Person class
  const person = new Person('Vaibhav', 'Jethava', 22);
  
  // Log the initial full name and age
  console.log(`Initial full name: ${person.fullName}`);
  console.log(`Initial age: ${person.age}`);
  
  // Update the full name and age using setters
  person.fullName = 'Rutul Prajapati';
  person.age = 22;
  
  // Log the updated full name and age
  console.log(`Updated full name: ${person.fullName}`);
  console.log(`Updated age: ${person.age}`);
  
  // Try setting an invalid age
  person.age = -5; // Should display an error message
  
  // Display complete information
  person.displayInfo();
  
// Initial full name: Vaibhav Jethava
// Initial age: 22
// Updated full name: Rutul Prajapati
// Updated age: 22
// Age must be a non-negative number.
// Name: Rutul Prajapati, Age: 22
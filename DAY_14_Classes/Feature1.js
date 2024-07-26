/* Feature Request -> 1 :
    Basic Class Script:
        - Write a script that defines a 'person' class with properties and methods, creates instances and logs messages.
*/

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  
    static getGenericGreeting() {
      return 'Hello, this is a generic greeting message.';
    }
  }
  
  // Create instances of the Person class
  const person1 = new Person('Vaibhav', 'Jethava', 22);
  const person2 = new Person('Rutul', 'Prajapati', 22);
  
  // Log the full name and greeting message for person1
  console.log(`Person 1 full name: ${person1.fullName}`);
  console.log(person1.getGreeting());
  
  // Log the full name and greeting message for person2
  console.log(`Person 2 full name: ${person2.fullName}`);
  console.log(person2.getGreeting());
  
  // Update the name for person1 using the setter and log the updated full name and greeting message
  person1.fullName = 'Priyanshu Patel';
  console.log(`Updated Person 1 full name: ${person1.fullName}`);
  console.log(person1.getGreeting());
  
  // Log a generic greeting message using the static method
  console.log(Person.getGenericGreeting());
  
// Person 1 full name: Vaibhav Jethava
// Hello, my name is Vaibhav Jethava and I am 22 years old.
// Person 2 full name: Rutul Prajapati
// Hello, my name is Rutul Prajapati and I am 22 years old.
// Updated Person 1 full name: Priyanshu Patel
// Hello, my name is Priyanshu Patel and I am 22 years old.
// Hello, this is a generic greeting message.
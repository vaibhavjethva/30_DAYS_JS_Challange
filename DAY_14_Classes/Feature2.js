/* Feature Request -> 2 :
    Class Inheritance Script:
        - Create a script that defines a 'student' class extending 'person',overrides methods and logs the results.
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
  
  class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
      super(firstName, lastName, age);
      this.studentId = studentId;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.fullName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }
  
  // Create instances of the Student class
  const student1 = new Student('Vaibhav', 'Jethava', 22, 'SID12345');
  const student2 = new Student('Rutul', 'Prajapati', 22, 'SID67890');
  
  // Log the full name and greeting message for student1
  console.log(`Student 1 full name: ${student1.fullName}`);
  console.log(student1.getGreeting());
  
  // Log the full name and greeting message for student2
  console.log(`Student 2 full name: ${student2.fullName}`);
  console.log(student2.getGreeting());
  
  // Update the name for student1 using the setter and log the updated full name and greeting message
  student1.fullName = 'Priyanshu Patel';
  console.log(`Updated Student 1 full name: ${student1.fullName}`);
  console.log(student1.getGreeting());
  
  // Log a generic greeting message using the static method from the Person class
  console.log(Person.getGenericGreeting());
  
//   Student 1 full name: Vaibhav Jethava
//   Hello, my name is Vaibhav Jethava, I am 22 years old, and my student ID is SID12345.
//   Student 2 full name: Rutul Prajapati
//   Hello, my name is Rutul Prajapati, I am 22 years old, and my student ID is SID67890.
//   Updated Student 1 full name: Priyanshu Patel
//   Hello, my name is Priyanshu Patel, I am 22 years old, and my student ID is SID12345.
//   Hello, this is a generic greeting message.
/* Activity -> 1 : Class Definition */

// Task_1 - Define a class 'person' with properties 'name','age' and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Create an instance of the class
  const personInstance = new Person('Vaibhav', 21);
  
  // Log the greeting message
  console.log(personInstance.getGreeting()); // Hello, my name is Vaibhav and I am 21 years old.
  
// Task_2 - Add a method to the 'person' class that updates the age property and logs the updated age.

class Person1 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`The updated age is ${this.age}.`);
    }
  }
  
  // Create an instance of the class
  const personInstance1 = new Person1('Vaibhav', 21);
  
  // Log the greeting message
  console.log(personInstance1.getGreeting());
  
  // Update the age and log the updated age
  personInstance1.updateAge(22);
  
// Hello, my name is Vaibhav and I am 21 years old.
// The updated age is 22.

/* Activity -> 2 : Class Inheritance */

// Task_3 - Define a class 'student' that  extends the person class. Add a property 'studentId' and a method to return the student ID. create an instance of the 'student' class and log the student ID.

class Person2 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`The updated age is ${this.age}.`);
    }
  }
  
  class Student extends Person2 {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getStudentId() {
      return `My student ID is ${this.studentId}.`;
    }
  }
  
  // Create an instance of the Student class
  const studentInstance = new Student('Vaibhav', 21, 'SID12345');
  
  // Log the student ID
  console.log(studentInstance.getStudentId()); // My student ID is SID12345.
  
// Task_4 - Override the greeting method in the 'student' class to include the student ID in the message. Log the overridden greeting message.

  class Person3 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  class Student1 extends Person3 {
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }
  
  // Create an instance of the Student class
  const studentInstance1 = new Student1('Vaibhav', 21, 'SID12345');
  
  // Log the overridden greeting message
  console.log(studentInstance1.getGreeting()); // Hello, my name is Vaibhav, I am 21 years old, and my student ID is SID12345.
  
/* Activity -> 3 : Static Methods and Properties */

// Task_5 - Add a static method to the 'person' class that returns a generic greeting message. Call this static method without creating an instance of class and log the message.

class Person4 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    static getGenericGreeting() {
      return 'Hello, this is a generic greeting message.';
    }
  }
  
  // Call the static method without creating an instance of the class
  console.log(Person4.getGenericGreeting()); // Hello, this is a generic greeting message.
  
// Task_6 - Add a static property to the 'student' class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

  class Person5 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    static getGenericGreeting() {
      return 'Hello, this is a generic greeting message.';
    }
  }
  
  class Student2 extends Person5 {
    static studentCount = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student2.studentCount++;
      console.log(`Total number of students: ${Student2.studentCount}`);
    }
  
    getGreeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  }
  
  // Create instances of the Student class
  const student1 = new Student2('Vaibhav', 22, 'SID12345');
  const student2 = new Student2('Rutul', 22, 'SID67890');
  
  // Log the overridden greeting message for one of the students
  console.log(student1.getGreeting()); // Hello, my name is Vaibhav, I am 22 years old, and my student ID is SID12345.
  console.log(student2.getGreeting()); // Hello, my name is Rutul, I am 22 years old, and my student ID is SID67890.

/* Activity -> 4 : Getters and Setters */

// Task_7 - Add a getter method to the 'person' class to return the full name (assume a  firstName and lastName property). Create an instance and log the full name using the getter.

  class Person6 {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  }
  
  // Create an instance of the Person class
  const personInstance2 = new Person6('Vaibhav', 'Jethava', 21);
  
  // Log the full name using the getter
  console.log(personInstance2.fullName); // Vaibhav Jethava
  console.log(personInstance2.getGreeting()); // Hello, my name is Vaibhav Jethava and I am 21 years old.
  
// Task_8 - Add a setter method to the 'person' class to update the name properties (firstName and lastName) Update the name using the setter and log the updated full name.

class Person7 {
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
  }
  
  // Create an instance of the Person class
  const personInstance3 = new Person7('Vaibhav', 'Jethava', 21);
  
  // Log the full name using the getter
  console.log(personInstance3.fullName); // Vaibhav Jethava
  
  // Update the name using the setter
  personInstance3.fullName = 'Rutul Prajapati';
  
  // Log the updated full name
  console.log(personInstance3.fullName); // Rutul Prajapati
  
/* Activity -> 5 : Private Fields (Optional) */

// Task_9 - Define a class 'Account' with private fields for 'balance' and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance;
  
    constructor(initialBalance = 0) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log('Insufficient balance or invalid withdrawal amount.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // Create an instance of the Account class
  const myAccount = new Account(100);
  
  // Deposit money
  myAccount.deposit(50);
  
  // Withdraw money
  myAccount.withdraw(30);
  
  // Try to withdraw more money than the balance
  myAccount.withdraw(150);
  
  // Log the final balance
  console.log(`Final balance: $${myAccount.getBalance()}`);
  
// Deposited: $50. New balance: $150
// Withdrew: $30. New balance: $120
// Insufficient balance or invalid withdrawal amount.
// Final balance: $120

// Task_10 - Create an instance of the 'Account' class and test the deposit and withdraw methods, logging the balance after each operation.

class Account1 {
    #balance;
  
    constructor(initialBalance = 0) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log('Insufficient balance or invalid withdrawal amount.');
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  // Create an instance of the Account class
  const myAccount1 = new Account1(100);
  
  // Log the initial balance
  console.log(`Initial balance: $${myAccount1.getBalance()}`);
  
  // Deposit money and log the balance
  myAccount1.deposit(50);
  console.log(`Balance after deposit: $${myAccount1.getBalance()}`);
  
  // Withdraw money and log the balance
  myAccount1.withdraw(30);
  console.log(`Balance after withdrawal: $${myAccount1.getBalance()}`);
  
  // Try to withdraw more money than the balance and log the result
  myAccount1.withdraw(150);
  console.log(`Balance after attempting to overdraw: $${myAccount1.getBalance()}`);
  
  // Final balance
  console.log(`Final balance: $${myAccount1.getBalance()}`);
  
// Initial balance: $100
// Deposited: $50. New balance: $150
// Balance after deposit: $150
// Withdrew: $30. New balance: $120
// Balance after withdrawal: $120
// Insufficient balance or invalid withdrawal amount.
// Balance after attempting to overdraw: $120
// Final balance: $120
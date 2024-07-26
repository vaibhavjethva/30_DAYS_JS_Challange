/* Feature Request -> 5 :
    Private Fields Script:
        - Write a script that defines a class with private fields and methods to manipulate these fields (optional).
*/

class BankAccount {
    #accountNumber;
    #balance;
  
    constructor(accountNumber, initialBalance = 0) {
      this.#accountNumber = accountNumber;
      this.#balance = initialBalance;
    }
  
    // Method to deposit money into the account
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log('Deposit amount must be positive.');
      }
    }
  
    // Method to withdraw money from the account
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log('Insufficient balance or invalid withdrawal amount.');
      }
    }
  
    // Method to view the account balance
    viewBalance() {
      console.log(`Current balance: $${this.#balance}`);
    }
  }
  
  // Create an instance of the BankAccount class
  const myAccount = new BankAccount('123456789', 1000);
  
  // Log the initial balance
  myAccount.viewBalance(); // Output: Current balance: $1000
  
  // Deposit money and log the balance
  myAccount.deposit(500); // Output: Deposited: $500. New balance: $1500
  
  // Withdraw money and log the balance
  myAccount.withdraw(200); // Output: Withdrew: $200. New balance: $1300
  
  // Try to withdraw more money than the balance
  myAccount.withdraw(1500); // Output: Insufficient balance or invalid withdrawal amount.
  
  // Log the final balance
  myAccount.viewBalance(); // Output: Current balance: $1300

//   Current balance: $1000
//   Deposited: $500. New balance: $1500
//   Withdrew: $200. New balance: $1300
//   Insufficient balance or invalid withdrawal amount.
//   Current balance: $1300
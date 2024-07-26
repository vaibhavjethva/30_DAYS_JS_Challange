/* Feature Request -> 3 :
    Static Methods and Properties Script:
        - Write a script that demonstrates static methods and properties in classes.
*/

class Calculator {
    static pi = 3.14159; // Static property
  
    static add(a, b) {
      return a + b; // Static method
    }
  
    static subtract(a, b) {
      return a - b; // Static method
    }
  
    static multiply(a, b) {
      return a * b; // Static method
    }
  
    static divide(a, b) {
      return a / b; // Static method
    }
  }
  
  // Use static methods without creating an instance
  const sum = Calculator.add(10, 5);
  console.log(`Sum: ${sum}`); // Output: Sum: 15
  
  const difference = Calculator.subtract(10, 5);
  console.log(`Difference: ${difference}`); // Output: Difference: 5
  
  const product = Calculator.multiply(10, 5);
  console.log(`Product: ${product}`); // Output: Product: 50
  
  const quotient = Calculator.divide(10, 5);
  console.log(`Quotient: ${quotient}`); // Output: Quotient: 2
  
  // Access the static property
  console.log(`Value of pi: ${Calculator.pi}`); // Output: Value of pi: 3.14159

//   Sum: 15
//   Difference: 5
//   Product: 50
//   Quotient: 2
//   Value of pi: 3.14159
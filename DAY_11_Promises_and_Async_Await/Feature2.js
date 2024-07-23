/* Feature Request -> 2 :
    Promise Chaining Script:
        - Create a script that chains multiple promises and logs messages in a specific sequence.
*/

// Function that returns a promise which resolves after a given time
const delay = (message, ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, ms);
    });
  };
  
  // Function to chain multiple promises
  const chainPromises = () => {
    delay('First message', 1000)
      .then((message) => {
        console.log(message);
        return delay('Second message', 2000);
      })
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  // Call the function to chain promises and log messages
  chainPromises();
  